import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    tableParent: {
        height: "400px",
        width: "100%",
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
        '& .MuiDataGrid-cell--editable:focus-within':{
            outline: "1px solid #6A40A4",
        },
        '& .MuiDataGrid-row div:empty':{
            outline: "1px solid red",
        },
    }
})