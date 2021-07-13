import { createMuiTheme } from "@material-ui/core";
import { jssPreset } from "@material-ui/styles";
import { create } from 'jss';
import rtl from 'jss-rtl';


export const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        aqua: {
            light: '#00C5C6',
            main: '#6BBAA7',
            dark: '#004247',
            contrastText: '#000',
        },
        sunshine: {
            light: '#D9B544',
            main: '#E3971E',
            dark: '#C76B16',
            contrastText: '#000',
        },
        lavender: {
            light: '#C79CC9',
            main: '#6C648B',
            dark: '#6A40A4',
            contrastText: '#000',
        },
        dustyrose: {
            light: '#E4CBCE',
            main: '#B6A19E',
            dark: '#626D71',
            contrastText: '#000',
        },
    },
});

export const jss = create({ plugins: [...jssPreset().plugins, rtl()] });