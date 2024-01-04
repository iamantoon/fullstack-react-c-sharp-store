import { Outlet } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState, useEffect, useCallback } from 'react';
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import { fetchCurrentUser } from "../../features/account/accountSlice";

function App() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCurrentUser());
            await dispatch(fetchBasketAsync());
        } catch (error){
            console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        initApp().then(() => setLoading(false));
    }, [initApp]);

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

    if (loading) return <LoadingComponent message='Initiazling app...' />

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
