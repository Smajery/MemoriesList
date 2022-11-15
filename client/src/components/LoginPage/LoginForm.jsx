import React, {useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY} from "../../utils/consts";

const LoginForm = () => {
    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [haveAccount, setHaveAccount] = useState(true)

    const {logIn} = useActions()

    function logInAc() {
        logIn()
        navigate(ROUTE_MEMORY)
    }


    return (
        <div className='login-form'>
            <form>
                <input
                    type='text'
                    value={emailValue}
                    placeholder='Введіть свій email'
                    onChange={e => setEmailValue(e.target.value)}
                />
                <input
                    type='password'
                    value={passwordValue}
                    placeholder='Введіть свій пароль'
                    onChange={e => setPasswordValue(e.target.value)}
                />
                <div className='btn-box'>
                    {haveAccount
                        ?
                        <div className='btn-box__text'>
                            <p>Немає облікового запису?
                                <span onClick={() => setHaveAccount(false)}>
                                    Зареєструйтесь!
                                </span>
                            </p>
                        </div>
                        :
                        <div className='btn-box__text'>
                            <p>У вас вже є обліковий запис?
                                <span onClick={() => setHaveAccount(true)}>
                                    Увійдіть!
                                </span>
                            </p>
                        </div>
                    }
                    {haveAccount
                        ?
                        <button onClick={logInAc}>Увійти</button>
                        :
                        <button>Зареєструйтесь</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default LoginForm;