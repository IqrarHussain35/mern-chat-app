import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from './designTokens';

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
const ThemeProviderWrapper = ({ children }) => {
    const [mode, setMode] = useState(localStorage.getItem('themeMode') || 'light');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode(prevMode => {
                const newMode = prevMode === 'light' ? 'dark' : 'light';
                localStorage.setItem('themeMode', newMode);
                return newMode;
            });
        },
    }), []);
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
        <ThemeContext.Provider value={{ theme, colorMode }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProviderWrapper };
