import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import NavMenu from "./CommonComponent/NavMenu/NavMenu";
import LoginContainer from "./LoginPage/Component/LoginContainer";


function App() {
    debugger
    return (
        <BrowserRouter>
            <div className="App">
                <NavMenu/>
                <div>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    {/*<Route path='/forgotPss' render={() => <ForgotPass/>}/>*/}
                    {/*<Route path='/register' render={() => <Register/>}/>*/}
                    {/*<Route path='/profile' render={() => <Profile/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;