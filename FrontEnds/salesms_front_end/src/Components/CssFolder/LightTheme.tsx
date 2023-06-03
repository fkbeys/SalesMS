import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: 'light', // Set theme mode to light

        primary: {
            main: '#008f62', // Set primary color
        },
        secondary: {
            main: '#f50057', // Set secondary color
        },
        text: {
            primary: '#202020', // Set text color to whites 
        },
        background: {
            default: '#ececec', // Set default background color
            paper: '#ffffff', // Set paper (card) background color
            // Set paper (card) background color
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Set custom font family
        button: {
            textTransform: 'none',
            '&:first-letter': {
                textTransform: 'uppercase',
            },
            '&:not(:first-letter)': {
                textTransform: 'lowercase',
            },
            // Add custom style to capitalize first letter of each word
            '&:first-letter, &::after, &::before, &::first-line': {
                textTransform: 'capitalize',
            },
        },
    },
    components: {
        MuiInput: {
            styleOverrides: {
                input: {
                    backgroundColor: '#e8e8e8', // Set input field background color
                },
            },
        },
    },
});

export default lightTheme;