import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NavMenu.module.css"


const NavMenu = () => {
    return <nav className={s.wraper}>
        <div>
            <NavLink to='/login'> Login </NavLink>
        </div>
        <div>
            <NavLink to='/forgotPss'> ForgotPass </NavLink>
        </div>
        <div>
            <NavLink to='/register'> Register </NavLink>
        </div>
        <div>
            <NavLink to='/profile'> Profile </NavLink>
        </div>
    </nav>

}

export default NavMenu;