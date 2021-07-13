import React, { useEffect } from 'react';

import { DataGrid } from '@material-ui/data-grid';
import { useStyles } from './tableStyles';
import { columns } from './tableData';
import { tableData } from '../../Store/actions/selectedProductActions';

import { toast, ToastContainer } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

// fetching data function
import { getData } from '../../API/productApi';


export default function ProductManagementTable() {

    const classes = useStyles();

    const dispatch = useDispatch();

    // get products list from redux
    const products = useSelector(state => state.products.tableList)

    useEffect(()=>{
        getData()
            .then(data => dispatch(tableData(data.data)))
            .catch(error => toast.error("!اطلاعات یافت نشد"))
    },[])


    return (
        <div className={classes.tableParent}>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                disableColumnMenu
                disableColumnSelector
                autoPageSize={true}
                disableExtendRowFullWidth
                className={classes.root}
            />
            <ToastContainer/>
        </div>
    );
}
