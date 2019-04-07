import React, { Component} from "react";
import LoginForm from "./LoginForm.js";

class Login extends React.Component {
    
  render (){
    return(
        <div >
        <img className="login-image" src="https://i.ibb.co/YWncyJ9/Raspberry.png" alt="Rapsberry Pie"/>
        <h1 className="tagline">Stay focused.</h1>
        <img className="logo-image" src="https://www.zitcom.dk/img/logo/zg-logo.svg" alt="Zitcom logo"/>
        <LoginForm />
        </div>
    )
  }
}

export default Login;
