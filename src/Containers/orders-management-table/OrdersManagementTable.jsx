import React, { useEffect, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';
import { useStyles } from './tableStyles';
import { columns } from './tableData';

import { toast, ToastContainer } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

// fetching data function
import { getOrders } from '../../API/ordersApi';

import { ordersList, selectedRow} from "../../Store/actions/ordersActions"

export default function ProductManagementTable({checked}) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const Allorders = useSelector(state => state.orders.ordersList)

    const selectedOrders = checked ? Allorders.filter((item) => item.status==="notDone") : Allorders.filter((item) => item.status==="done")

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrders()
            .then(data => { dispatch(ordersList(data.data)); setLoading(false) })
            .catch(error => toast.error("!اطلاعات یافت نشد"))
    }, [])

    const handleCellClick = (row) => {
        dispatch(selectedRow(row));
    }


    return (
        <div className={classes.tableParent}>
            <DataGrid
                rows={selectedOrders}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                disableColumnMenu
                disableColumnSelector
                autoPageSize={true}
                disableExtendRowFullWidth
                className={classes.root}
                loading={loading}
                onCellClick={(cell) => handleCellClick(cell.row)}
            />
            <ToastContainer />
        </div>
    );
}
