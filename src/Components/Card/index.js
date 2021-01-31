import React from 'react'
import './blogCard.css'
import blogPost01 from '../../assets/images/blog-post-01.jpg';
//import blogPost02 from '../../assets/images/blog-post-02.jpg';

export default function BlogCard() {
    return (
        <div className="blog-post">
            <div className="blog-thumb">
                <img src={blogPost01} alt="" />
            </div>
            <div className="down-content">
                <span>Lifestyle</span>
                <a href="/article/:id">
                    <h4>Best Templete Website for Html Css</h4>
                </a>
                <ul className="post-info">
                    <li><a href="javascript">Admin</a></li>
                    <li><a href="javascript">May 31, 2020</a></li>
                    <li><a href="javascript">12 Comments</a></li>
                </ul>
                <p>Stand Blog is a free HTML CSS template for your CMS theme. You can easily adapt or customize it
                for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT
                allowed to re-distribute the template ZIP file on any template collection site for the download
            purpose.</p>
            </div>
        </div>
    )
}