import React, {useState} from 'react';

const LoginForm = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [haveAccount, setHaveAccount] = useState(true)

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
                                <span>
                                            <a onClick={() => setHaveAccount(false)}>Зареєструйтесь!</a>
                                        </span>
                            </p>
                        </div>
                        :
                        <div className='btn-box__text'>
                            <p>У вас вже є обліковий запис?
                                <span>
                                            <a onClick={() => setHaveAccount(true)}>Увійдіть!</a>
                                        </span>
                            </p>
                        </div>
                    }
                    {haveAccount
                        ?
                        <button>Увійти</button>
                        :
                        <button>Зареєструйтесь</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default LoginForm;