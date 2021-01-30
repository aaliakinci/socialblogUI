import React from 'react'
import Header from '../../Components/Header'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer'
import Sidebar from '../../Components/Sidebar'
import './homepage.css'

export default function HomePage() {
    return (
        <>
            <section className="blog-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Card />
                                    </div>
                                    <div className="col-lg-12" >
                                        <Card />
                                    </div >
                                    <div className="col-lg-12" >
                                        <Card />
                                    </div >
                                    <div className="col-lg-12" >
                                        <div className="main-button" >
                                            <a href="blog.html">View All Posts</a>
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                    </div >
                </div >
            </section >
            
        </>
    )
}