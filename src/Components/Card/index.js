import React from 'react'
import './blogCard.css'
import blogPost01 from '../../assets/images/blog-post-01.jpg';
//import blogPost02 from '../../assets/images/blog-post-02.jpg';

export default function BlogCard({ title, description, content, user_id, createAt, id }) {
    return (
        <div className="blog-post">
            <div className="blog-thumb">
                <img src={blogPost01} alt="" />
            </div>
            <div className="down-content">
                <span>Lifestyle(Hashtag)</span>
                <a href={`/</div>article/:${id}`}>
                    <h4>{title}</h4>
                </a>
                <ul className="post-info">
                    <li><a href="javascript"> {user_id} </a></li>
                    <li><a href="javascript"> {createAt} </a></li>
                    <li><a href="javascript">12 Comments</a></li>
                </ul>
                <p>{content}- desc: {description}</p>
            </div>
        </div>
    )
}