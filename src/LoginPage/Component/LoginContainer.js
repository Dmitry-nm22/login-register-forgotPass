import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {SingInTC, updateCheckboxAC, updateEmailAC, updatePassAC} from "../reducer/Login-reducer";



let mapStateToProps = (state) => {
    return {
        login: state.login
    }
};
let mapDispatchTooProps = (dispatch) => {
    return {
        updateEmail: (email) => {
            dispatch(updateEmailAC(email))
        },
        updatePass: (pass) => {
            dispatch(updatePassAC(pass))
        },
        updateCheckbox: (bool) => {
            dispatch(updateCheckboxAC(bool))
        },
        singIn: (bool) => {
            dispatch(SingInTC(bool))
        },
    }
};




export default connect(mapStateToProps, mapDispatchTooProps)(Login)

