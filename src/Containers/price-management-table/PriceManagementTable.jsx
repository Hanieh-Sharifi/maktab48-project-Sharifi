import React, { useEffect, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';
import { useStyles } from './tableStyles';
import { columns } from './tableData';
import { tableData } from '../../Store/actions/productsActions';

import { toast, ToastContainer } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

// fetching data function
import { getData } from '../../API/productApi';

function PriceManagementTable({ handleDataFromTable }) {

    const classes = useStyles();

    const dispatch = useDispatch();

    // get products list from redux
    const products = useSelector(state => state.products.tableList);

    const editedProducts = products.map((item) => {
        let price = +item.price
        let inventory = +item.inventory
        let editedPrice = price.toLocaleString('ar-EG')
        let editedInventory = inventory.toLocaleString('ar-EG')
        return ({...item, price: editedPrice, inventory: editedInventory})
    })

    const [loading, setLoading] = useState(true);
    const [changedRows, setChangedRows] = useState([]);

    useEffect(() => {
        getData()
            .then(data => { dispatch(tableData(data.data)); setLoading(false) })
            .catch(error => toast.error("!اطلاعات یافت نشد"))
    }, [])

    const cellChanges = (id, field, value) => {
        if (value!=="")
        {
            let changedRow = products.filter((item) => item.id === id);
            changedRow[0][field] = value;
            let deleteRepeatedChangedRows = changedRows.filter((item) => item.id !== id);
            setChangedRows([...deleteRepeatedChangedRows, ...changedRow]);
            handleDataFromTable([...deleteRepeatedChangedRows, ...changedRow]);
        }
        else if(value==="")
        {
            handleDataFromTable([])
        }
    }


    return (
        <div className={classes.tableParent}>
            <DataGrid
                rows={editedProducts}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                disableColumnMenu
                disableColumnSelector
                autoPageSize={true}
                disableExtendRowFullWidth
                className={classes.root}
                loading={loading}
                onEditCellChangeCommitted={(params) => cellChanges(params.id, params.field, params.props.value)}
            />
            <ToastContainer />
        </div>
    );
}

export default PriceManagementTable;