import { makeStyles } from "@material-ui/core";

export const modalContainerStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            display: "flex",
        },
        justifyContent: "center",
        width: "300px",
        height: "100%",
        margin: "auto",
    },
    button: {
        marginTop: "40px",
        fontSize:"1rem",
    },
}));

export const modalMainStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: "0",
        overflowY: 'scroll',
        margin:"10px 0",
    },
    paper: {
        width:"360px",
        [theme.breakpoints.up("sm")]:{
            width:"400px"
        },
        backgroundColor: "white",
        boxShadow: theme.shadows[5],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: "auto",
        padding: "30px 50px",
        position: "relative",

    },
    closeButton: {
        position: "absolute",
        top: "0",
        right: "0",
    },
}));

export const tableStyle = makeStyles({
    table: {
        minWidth: "400px",
        '& a':{
            textDecoration:"none",
            color: "#8074b1",
        }
    },
});