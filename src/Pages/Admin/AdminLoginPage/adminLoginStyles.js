import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme) => ({
    parent: {
        height: "100vh",
        display: "flex",
        backgroundColor: "rgb(251,161,0,.1)",
    },
    formParent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 16px 30px -8px #000000",
        [theme.breakpoints.up('sm')]:{
            borderRadius: "8px",
        },
        width: "max-content",
        padding: "20px 10px",
        margin: "auto",
        backgroundColor: "white",
        '&>a': {
            marginTop: "30px",
            display: "flex",
            marginLeft: "auto",
            textDecoration: "none",
            color: "black",
            fontWeight: "500",
            fontSize: "1rem",
        },
        '&>a:hover':{
            color:"#6A40A4",
        },
    },
    root: {
        '& > *': {
            width: '100%',
            display: "flex",
        },
        '&>div': {
            marginBottom: "35px",
        },
        '&>button': {
            marginTop: "70px",
            marginBottom: "20px",
        },
        '&>h1': {
            marginBottom: "40px",
            textAlign: "center",
        },
        margin: "0px 35px",
    },
}));