import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useStyles } from './tableStyles';
import { getData } from '../../API/productApi';
import { columns } from './tableData';


export default function ProductManagementTable() {

    const [products,setProducts] = useState([]);

    const classes = useStyles();

    useEffect(()=>{
        getData()
        .then((data) => setProducts(data.data))
        .catch((error) => toast.error("! گرفتن اطلاعات با خطا رو به رو شد"))
    },[])

    return (
        <div style={{ height: 400, width:"100%"}}>
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
