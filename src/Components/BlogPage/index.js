import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import PageHeading from '../PageHeading'
import BlogCard from '../BlogCard'
import Footer from '../Footer'
import './blogPage.css'

const BlogPage = () => {
    return (
        <>
            {/* <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            <Header />
            <PageHeading />
            <section className="blog-posts grid-system">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="all-blog-posts">
                                <div className="row">
                                    <div className="col-lg-6">
                                        {<BlogCard />}
                                    </div>
                                    <div className="col-lg-6">
                                        {<BlogCard />}
                                    </div>
                                    <div className="col-lg-6">
                                        {<BlogCard />}
                                    </div>
                                    <div className="col-lg-6">
                                        {<BlogCard />}
                                    </div>
                                    <div className="col-lg-6">
                                        {<BlogCard />}
                                    </div>
                                    <div className="col-lg-6">
                                        {<BlogCard />}
                                    </div>
                                    <div className="col-lg-12">
                                        <ul className="page-numbers">
                                            <li><a href="javascript">1</a></li>
                                            <li className="active"><a href="javscript">2</a></li>
                                            <li><a href="javascript">3</a></li>
                                            <li><a href="javascript"> {'>'} </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BlogPage