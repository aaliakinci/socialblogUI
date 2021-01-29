import React from 'react'
import Header from '../UserHeader'
import Card from '../Card'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import Banner from '../Banner';
import OrangeButton from '../OrangeButton'
import './homepage.css'


export default function HomePage() {
    return (
        <>
            <Header />
            <Banner />
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
                                        <OrangeButton />
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
            <Footer />
        </>
    )
}