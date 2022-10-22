import React from 'react';
import {useNavigate} from "react-router-dom";
import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_MEMORY} from "../../utils/consts";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <ul className='nav'>
          <li onClick={() => navigate(ROUTE_HOME)}>Home</li>
          <li onClick={() => navigate(ROUTE_MEMORY)}>Memory</li>
          <li onClick={() => navigate(ROUTE_LOGIN)}>Login</li>
        </ul>
    );
};

export default Navbar;