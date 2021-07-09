import React, {useState} from 'react';

// material ui components
import { Container, Grid, Typography } from '@material-ui/core';
import { LavenderButton } from "../../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent";

// material ui styles
import { makeStyles } from '@material-ui/core';

// components
import ProductManagementTable from "../../../Containers/product-management-table/ProductManagementTable";
import ModalComp from '../../../Containers/modal/ModalComp';

const useStyles = makeStyles((theme) => ({
    button:{
        color:"white",
        width:"200px",
    },
    textParent:{
        marginBottom:"25px",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
}));

function AdminManageProducts() {

    const classes = useStyles();

    return (
        <Container maxWidth="lg" align="center">
            <Grid container justify="center">
                <Grid container item md={5} xs={12} className={classes.textParent}>
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
