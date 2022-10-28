import React, {useEffect} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";
import {useActions} from "./hooks/useActions";

const App = () => {
    const {setIsAuth} = useActions()

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true)
        }
    }, [setIsAuth])

    return (
        <>
            <Header/>
            <div className='wrapper'>
                <AppRouter/>
            </div>
            <Footer/>
        </>
    );
};

export default App;