import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a href="javascript" className="navbar-brand">
                        <h2>Stand Blog <em>.</em></h2>
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
													 <i class="fa fa-user"></i> Log in 
                                </Link>
													 </li>
													 <li className="nav-item"> 
													 <Link to="/register" className="nav-link">
                                |  Register
                                </Link>
													 </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}