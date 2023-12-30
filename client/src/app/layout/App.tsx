import { Outlet } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from 'react';
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const paletteType = darkMode ? 'dark' : 'light';

    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: paletteType === 'light' ? '#eaeaea' : '#121212'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>   
            <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={setDarkMode} />
            <Container>
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}

export default App
