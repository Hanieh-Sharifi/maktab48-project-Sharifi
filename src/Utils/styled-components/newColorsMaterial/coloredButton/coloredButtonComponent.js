import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";


export const AquaButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.aqua.main,
        '&:hover': {
            backgroundColor: theme.palette.aqua.dark,
        },
        '& .MuiInputBase-root': {
            color: theme.palette.aqua.contrastText
        }
    }
}))(Button);

export const SunShineButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.sunshine.main,
        '&:hover': {
            backgroundColor: theme.palette.sunshine.dark,
        },
        '& .MuiInputBase-root': {
            color: theme.palette.sunshine.contrastText
        },
        fontSize: "1.3rem",
        fontWeight:"bold",
    }
}))(Button);

export const LavenderButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.lavender.main,
        '&:hover': {
            backgroundColor: theme.palette.lavender.dark,
        },
        '& .MuiInputBase-root': {
            color: theme.palette.lavender.contrastText
        }
    }
}))(Button);

export const DustyRoseButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.dustyrose.main,
        '&:hover': {
            backgroundColor: theme.palette.dustyrose.dark,
        },
        '& .MuiInputBase-root': {
            color: theme.palette.dustyrose.contrastText
        }
    }
}))(Button);