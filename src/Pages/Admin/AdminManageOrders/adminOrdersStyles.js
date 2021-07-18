import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    textParent: {
        marginBottom: "25px",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
    formLabel:{
        '& .MuiFormControlLabel-label':{
            fontSize:".8rem",
        }
    }
}));