import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // Set the mode to 'dark'
        primary: {
            main: '#102fc9',   // Set primary color to a nice blue         
        },
        secondary: {
            main: '#001570', // Set secondary color to a nice pink
        },

        text: {
            primary: '#ffffff', // Set text color to whites 
        },
        background: {
            default: '#212121', // Set background color to a dark grey
            paper: '#494040', // Set paper color to a darker grey
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
});

export default darkTheme;