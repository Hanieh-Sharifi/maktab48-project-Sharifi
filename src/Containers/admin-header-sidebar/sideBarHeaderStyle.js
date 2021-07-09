import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
        root: {
                display: 'flex',
        },
        drawer: {
                [theme.breakpoints.up('sm')]: {
                        width: drawerWidth,
                        flexShrink: 0,
                },
        },
        appBar: {
                [theme.breakpoints.up('sm')]: {
                        width: `calc(100% - ${drawerWidth}px)`,
                        marginLeft: drawerWidth,
                },
        },
        menuButton: {
                marginRight: theme.spacing(2),
                [theme.breakpoints.up('sm')]: {
                        display: 'none',
                },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
                backgroundColor: "#F3F0C5",
                width: drawerWidth,
                '& a': {
                        textDecoration: "none",
                        color: "black",
                }
        },
        content: {
                flexGrow: 1,
                padding: theme.spacing(3),
        },
}));