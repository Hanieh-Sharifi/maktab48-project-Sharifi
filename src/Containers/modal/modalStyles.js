import { makeStyles } from "@material-ui/core";

export const modalContainerStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5),
            display: "flex",
        },
        justifyContent: "center",
        width: "100%",
        height: "100%",
        margin: "auto",
    },
    button: {
        marginTop: "50px",
    },
}));

export const modalMainStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: "400px",
        backgroundColor: "white",
        boxShadow: theme.shadows[5],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: "auto",
        padding: "30px",
        position: "relative",
    },
    closeButton: {
        position: "absolute",
        top: "0",
        right: "0",
    },
}));