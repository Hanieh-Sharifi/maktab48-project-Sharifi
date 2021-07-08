import { withStyles } from "@material-ui/styles";
import { AppBar } from "@material-ui/core";

export const SunShineAppBar = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.sunshine.dark,
    }
}))(AppBar);