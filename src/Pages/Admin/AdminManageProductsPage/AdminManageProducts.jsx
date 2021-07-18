import React from 'react';

// material ui components
import { Container, Grid, Typography } from '@material-ui/core';
import { LavenderButton } from "../../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent";

// material ui styles
import {useStyles} from "./adminProductsStyles";

// components
import ProductManagementTable from "../../../Containers/product-management-table/ProductManagementTable";
import ModalComp from '../../../Containers/product-mangement-modal/ModalComp';

function AdminManageProducts() {

    const classes = useStyles();


    return (
        <Container maxWidth="lg" align="center">
            <Grid container justify="center">
                <Grid container item md={5} xs={12} className={classes.textParent} align="center">
                    <Typography variant="h4" component="h4" >
                        مدیریت کالاها
                    </Typography>
                </Grid>
                <Grid container item md={5} xs={12} justify="flex-end" className={classes.textParent}>
                    <ModalComp>
                        <LavenderButton vaiant="contained" size="large" className={classes.button}>
                            افزودن کالا
                        </LavenderButton>
                    </ModalComp>
                </Grid>
            </Grid>
            <ProductManagementTable/>
        </Container>
    )
}

export default AdminManageProducts;
