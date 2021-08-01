import React from 'react';

import { DataGrid } from '@material-ui/data-grid';

import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, Button, Container, Grid, Toolbar, Typography } from "@material-ui/core";

import {LavenderButton} from "../../../Utils/styled-components/newColorsMaterial/coloredButton/coloredButtonComponent";

import MainPageHeader from "../../../Components/MainPageHeader";
import { Link } from 'react-router-dom';
import { deleteItemFromShoppingList } from '../../../Store/actions/productsActions';

const useStyles = makeStyles({
    tableParent: {
        height: "100%",
        width: "100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        "& a":{
            textDecoration:"none",
        },
        "& button":{
            color:"white",
        }
    },
    root: {
        '& .MuiTablePagination-root': {
            marginRight: "30px",
            direction: "rtl",
            '& .MuiTablePagination-actions': {
                direction: "ltr",
            },
        },
        '& .MuiSvgIcon-root': {
            color: "#6C648B",
        },
        '& .table-last-col': {
            color: "#498CE9",
        },
        '& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within': {
            outline: "0",
        },
    }
})

const columns = [
    {
        field: 'id',
        headerName: 'ردیف',
        sortable: false,
        flex: .5,
        filterable: false,
    },
    {
        field: "name",
        headerName: 'نام کالا',
        sortable: false,
        flex: 1,
        filterable: false,
    },
    {
        field: 'price',
        headerName: 'قیمت',
        sortable: true,
        flex: 1,
        filterable: false,
    },
    {
        field: 'numbers',
        headerName: 'تعداد',
        sortable: true,
        flex: 1,
        filterable: false,
    },
    {
        field: 'status',
        headerName: "  ",
        sortable: false,
        flex: 1,
        width: 200,
        filterable: false,
        renderCell: () => {
            return (
                <Button fullWidth className="table-last-col" >حذف</Button>
            );
        },
    }
];

function ShoppingList() {

    const classes = useStyles();

    const dispatch = useDispatch();

    const shoppingList = useSelector(state => state.products.shoppingList);
    let price = shoppingList[0] ? shoppingList.reduce((a,b) => (+a.price)+(+b.price)) : 0;

    return (
        <>
        <MainPageHeader/>
        <div className={classes.tableParent}>
            <Toolbar/>
            <div style={{width:"70%",height:"400px"}} >
                <DataGrid
                    rows={shoppingList}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick
                    disableColumnMenu
                    disableColumnSelector
                    autoPageSize={true}
                    disableExtendRowFullWidth
                    className={classes.root}
                        onCellClick={(cell) => dispatch(deleteItemFromShoppingList(cell.row.id))}
                />
            </div>
            <Toolbar/>
            <Container maxWidth="md">
                <Grid container justify="space-between">
                    <Grid item><Typography variant="h5" >قیمت نهایی: {price.id ? price.price : price} تومان</Typography></Grid>
                    <Grid item>
                        <Link to="/user/information">
                            <LavenderButton>نهایی کردن سبد خرید</LavenderButton>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    )
}

export default ShoppingList
