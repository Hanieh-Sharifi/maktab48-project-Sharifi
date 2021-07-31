import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
        width: "200px",
    },
    textParent: {
        marginBottom: "25px",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
        '& .Mui-disabled':{
            color: "white",
            backgroundColor: "#6C648B",
            opacity: ".9",
        },
    },
}));