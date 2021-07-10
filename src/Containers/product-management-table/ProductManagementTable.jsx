import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete"
import { FormControlLabel, IconButton} from "@material-ui/core";
import { useDispatch } from 'react-redux';

const MatEdit = ({data}) => {

    const dispatch = useDispatch();

    const handleEditClick = () => {
        dispatch({ type: "EDIT_ROW", payload: data })
    }


    return <FormControlLabel
        control={
            <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                <EditIcon />
            </IconButton>
        }
    />
};

const MaDelete = ({ index }) => {

    const handleEditClick = () => {
        axios.delete(`http://localhost:5000/products/${index}`)
            .then(window.location.reload())
    }


    return <FormControlLabel
        control={
            <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                <DeleteIcon/>
            </IconButton>
        }
    />
};

const columns = [
    { 
        field: 'id', 
        headerName: 'ردیف', 
        sortable: false,
        flex:.5,
        filterable:false,
    },
    {
        field:"image",
        headerName: 'تصویر کالا',
        sortable: false,
        renderCell: (params) => {
            return (
                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", objectFit: "cover"}}>
                    <img alt="product image" src={params.row.image} style={{height:"50px"}}/>
                </div>
            );
        },
        flex:1,
        filterable:false,
    },
    {
        field: 'productName',
        headerName: 'نام کالا',
        sortable: false,
        flex: 1,
        filterable:false,
    },
    {
        field: 'category',
        headerName: 'دسته بندی',
        sortable:true,
        flex: 1,
    },
    {
        field: "actions",
        headerName: "  ",
        sortable: false,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            return (
                <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                    <MatEdit index={params.row.id} data={params.row}/>
                    <MaDelete index={params.row.id} />
                </div>
            );
        },
        flex: .5,
        filterable:false,
    }
];



export default function ProductManagementTable({data}) {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then((data) => setProducts(data.data))
        .catch((error) => toast.error("! گرفتن اطلاعات با خطا رو به رو شد"))
    },[])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />
            <ToastContainer/>
        </div>
    );
}
