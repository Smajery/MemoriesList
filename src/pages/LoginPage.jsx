import React, {useState} from 'react';
import LoginForm from "../components/LoginPage/LoginForm";

const LoginPage = () => {

    return (
        <div className='login-page'>
            <div className='instruction'>
                <div className='instr__text'>
                    <h1>Вітаємо!</h1>
                    <h2>Якийсь текст</h2>
                    <h3>Для того, щоб почати, будь ласка, увійдіть</h3>
                </div>
                <LoginForm/>
            </div>
        </div>
    );
};

export default LoginPage;