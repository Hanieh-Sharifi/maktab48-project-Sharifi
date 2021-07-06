import { withStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";


export const AquaTextField = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: theme.palette.aqua.main,
        },
        '& .MuiInput-outlined:after': {
            borderBottomColor: theme.palette.aqua.main,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: {
                    borderColor: theme.palette.aqua.main,
                },
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.aqua.main,
            },
        },
        '& .MuiInputBase-root': {
            color: theme.palette.aqua.contrastText
        }
    }
}))(TextField);

export const SunShineTextField = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: theme.palette.sunshine.main,
        },
        '& .MuiInput-outlined:after': {
            borderBottomColor: theme.palette.sunshine.main,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: {
                    borderColor: theme.palette.sunshine.main,
                },
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.sunshine.main,
            },
        },
        '& .MuiInputBase-root': {
            color: theme.palette.sunshine.contrastText
        }
    }
}))(TextField);

export const LavenderTextField = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: theme.palette.lavender.main,
        },
        '& .MuiInput-outlined:after': {
            borderBottomColor: theme.palette.lavender.main,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: {
                    borderColor: theme.palette.lavender.main,
                },
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.lavender.main,
            },
        },
        '& .MuiInputBase-root': {
            color: theme.palette.lavender.contrastText
        }
    }
}))(TextField);

export const DustyRoseTextField = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: theme.palette.dustyrose.main,
        },
        '& .MuiInput-outlined:after': {
            borderBottomColor: theme.palette.dustyrose.main,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: {
                    borderColor: theme.palette.dustyrose.main,
                },
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.dustyrose.main,
            },
        },
        '& .MuiInputBase-root': {
            color: theme.palette.dustyrose.contrastText
        }
    }
}))(TextField);