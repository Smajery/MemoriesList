import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <AppRouter/>
            </div>
            <Footer/>
        </>
    );
};

export default App;