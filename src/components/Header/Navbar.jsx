import React from 'react';
import {useNavigate} from "react-router-dom";
import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_MEMORY} from "../../utils/consts";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";

const Navbar = () => {
    const navigate = useNavigate()
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const {logOut} = useActions()

    function logOutAc() {
        logOut()
        navigate(ROUTE_LOGIN)
    }

    return (
        isAuth
            ?
            <ul className='nav'>
                <li onClick={() => navigate(ROUTE_HOME)}>Home</li>
                <li onClick={() => navigate(ROUTE_MEMORY)}>Memory</li>
                <li onClick={logOutAc}>Выйти</li>
            </ul>
            :
            <ul className='nav'>
                <li onClick={() => navigate(ROUTE_HOME)}>Home</li>
                <li onClick={() => navigate(ROUTE_LOGIN)}>Login</li>
            </ul>
    );
};

export default Navbar;