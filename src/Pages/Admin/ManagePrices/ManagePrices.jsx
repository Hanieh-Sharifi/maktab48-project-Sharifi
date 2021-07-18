import React, { useState } from 'react';

// material ui components
import { Container, Grid } from '@material-ui/core';
import { LavenderButton } from "../../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent";

// material ui styles
import { useStyles } from "./managePricesStyles";

// components
import PriceManagementTable from '../../../Containers/price-management-table/PriceManagementTable';
import { putData } from '../../../API/productApi';
import { useDispatch } from 'react-redux';
import { editProductApi } from '../../../Store/actions/productsActions';


function AdminManageProducts() {

    const classes = useStyles();

    const [dataFromTable, setDataFromTable] = useState([]);

    const dispatch = useDispatch();

    const handleDataFromTable = (data) => {
        setDataFromTable(data)
    }

    const fetchChangedData = () => {
        dataFromTable.map((item) => {
            dispatch(editProductApi(item.id, item.image, item.productName, item.category, item.explanation, item.price, item.inventory))
        })
        setDataFromTable([])
    }

    return (
        <Container maxWidth="lg" align="center">
            <Grid container justify="flex-end">
                <Grid container item md={3} xs={12} className={classes.textParent} align="right">
                    <LavenderButton onClick={() => fetchChangedData()} disabled={dataFromTable[0]===undefined ? true : false} className={classes.button} fullWidth >ذخیره</LavenderButton>
                </Grid>
            </Grid>
            {/* <ProductManagementTable /> */}
            <PriceManagementTable handleDataFromTable={(data) => handleDataFromTable(data)} />
        </Container>
    )
}

export default AdminManageProducts;
