import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    tableParent:{
        height:"400px",
        width:"100%",
    },
    root: {
        '& .MuiTablePagination-root':{
            marginRight:"30px",
            direction:"rtl",
            '& .MuiTablePagination-actions':{
                direction:"ltr",
            },
        },
        '& .MuiSvgIcon-root': {
            color: "#6C648B",
        },
        '& .table-image-parent .table-icon-parent':{
            cursor:"pointer",
            objectFit:"cover",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        '& img':{
            height:"50px",
        },
        '& .MuiDataGrid-cell:focus-within, .MuiDataGrid-columnHeader:focus-within': {
            outline: "0",
        },
    }
})