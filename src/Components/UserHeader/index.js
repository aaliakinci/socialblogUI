import React from 'react'
import './header.css'
import OrangeButton from '../OrangeButton/index'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-xl">
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
                                <a href="javascript" className="nav-link">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript" className="nav-link">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript" className="nav-link">Blog Entries</a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript" className="nav-link">Post Details</a>
                            </li>
                            <li className="nav-item">
                                <OrangeButton />

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}