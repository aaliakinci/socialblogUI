import React from 'react'
import Logo from '../../assets/images/logo.jpg'
import './firstpage.css'

export default function FirstPage() {
    return (
        <div className="h-100 first-page">
            <div className="">
                <img src={Logo} alt="" />
            </div>
            <div className="login-register-buttons">
                <button className="login-button btn mr-2 ml-4" >Login</button>
                <button className="register-button btn ml-2" >Register</button>
            </div>
        </div>
    )
}