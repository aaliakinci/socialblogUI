
import React, { useContext } from 'react'
import Card from '../../Components/Card'
import Sidebar from '../../Components/Sidebar'
import Banner from '../../Components/Banner';
import './homepage.css'
import BlogContext from '../../Contexts/BlogContext/BlogContext';

export default function HomePage() {
    const { articles, setArticles } = useContext(BlogContext);
	 	 
    return (
        <>
            <Banner />
            <section className="blog-posts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="all-blog-posts">
                                {articles.length && articles.map(article => {
                                    return <Card key={article._id} id={article._id} hashtags={article.hashtag} title={article.title} description={article.description} content={article.content} createAt={article.createAt} user={article.user} />
                                })}
                            </div>
                        </div >
                        <div className="col-lg-4 col-12">
                            <Sidebar />
                        </div>
                    </div >
                </div >
            </section >
        </>
    )
}