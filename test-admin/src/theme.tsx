import { defaultTheme, useTheme } from 'react-admin';
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const lightTheme = {
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        mode: 'light' as const,

        primary: {
            main: '#6E7F80',
        },

        background: {
            default: '#F4F0E8',
            paper: '#FBF8F2',
        },
    },
};

export const darkTheme = {
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        mode: 'dark' as const,

        primary: {
            main: '#1B263B',
        },

        background: {
            default: '#0B132B',
            paper: '#16213E',
        },
    },
};

export const ThemeToggler = () => {
    const [theme, setTheme] = useTheme();

     return (
        <IconButton
            color="inherit"
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
        >
            {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
}