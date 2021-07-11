import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    tableParent:{
        height:"400px",
        width:"100%",
    },
    root: {
        '& .MuiSvgIcon-root': {
            color: "#6C648B",
        },
        '& .table-image-parent .table-icon-parent':{
            cursor:"pointer",
            objectFit:"cover",
        },
        '& img':{
            height:"50px",
        },
    }
})