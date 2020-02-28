import {authAPI} from "../api/api";

const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASS = 'UPDATE_PASS';
const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
const CHANGE_SUCCESS = 'CHANGE_SUCCESS';

let initialState = {
    email: '',
    password: '',
    rememberMe: false,
    success: false
};


const loginReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.email
            };
        case UPDATE_PASS :
            return {
                ...state,
                password: action.pass
            };
        case UPDATE_CHECKBOX :
            return {
                ...state,
                rememberMe: action.bool
            };
            case CHANGE_SUCCESS :
            return {
                ...state,
                success: action.bool
            };
        default: return state
    }
};


//action creators
export const updateEmailAC = (email) => ({type: UPDATE_EMAIL, email});
export const updatePassAC = (pass) => ({type: UPDATE_PASS, pass});
export const updateCheckboxAC = (bool) => ({type: UPDATE_CHECKBOX, bool});
export const changeSuccess = (bool) => ({type: CHANGE_SUCCESS, bool});



//thunk creators
export const SingInTC = () =>{
    return (dispatch, getState) =>{
        authAPI.me(getState().email, getState().password, getState().rememberMe)
            .then(response => {
                debugger
                dispatch(changeSuccess(true))
            }).catch(e =>{
                dispatch(changeSuccess(false))
        })
    }}

export default loginReducer;