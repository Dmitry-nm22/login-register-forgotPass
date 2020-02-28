import React from "react";
import s from "./Login.module.css"



function Login(props) {

    const {login, updateEmail, updatePass,updateCheckbox,singIn } = props;


    let changeEmail = (e) =>{
        let email = e.currentTarget.value
        updateEmail(email);
    }

    let changePass = (e) =>{
        let pass = e.currentTarget.value
        updatePass(pass);
    }

    let changeCheckBox = (e) =>{
        let bool = e.currentTarget.checked
        updateCheckbox(bool);
    }

    let setEmail = () =>{
        singIn();
    }

    return (
        <div className={s.wraper}>
            <input  placeholder='email' value={login.email} onChange={changeEmail}/>
            <input type="password" placeholder='password' value={login.password} onChange={changePass}/>
            <a href="#">Forgot Password?</a>
            <input type="checkbox" checked={login.rememberMe} onChange={changeCheckBox}/> Remember Me?
            <button onClick={setEmail}>Sing in</button>
            <a href="#">Registration</a>
        </div>
    );
}

export default Login;