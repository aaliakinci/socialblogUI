import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg'
export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a href="javascript" className="navbar-brand">
                        <img src={Logo} alt="" style={{ height: '20%', width: '20%' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    <i className="fa fa-user"></i> Log in
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}