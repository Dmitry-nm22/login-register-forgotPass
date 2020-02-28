import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleWare from "redux-thunk";
import loginReducer from "../LoginPage/reducer/Login-reducer";



let reducers = combineReducers({
    login: loginReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export default store;