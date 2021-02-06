import React from 'react'
import './blogCard.css'
import blogPost01 from '../../assets/images/blog-post-01.jpg';
import { Link } from 'react-router-dom'
//import blogPost02 from '../../assets/images/blog-post-02.jpg';

function BlogCard({ title, description, content, user, createAt, id }) {

    return (
        <div className="blog-post">
            <div className="blog-thumb">
                <img src={blogPost01} alt="" />
            </div>
            <div className="down-content">
                <span>Lifestyle(Hashtag)</span>
                <Link to={`/article/${id}`}>
                    <h4>{title}</h4>
                </Link>
                <ul className="post-info">
                    {
                        user ? <li>{user[0].username}</li> : 'error'
                    }
                    <li><a href="javascript"> {createAt} </a></li>
                    <li><a href="javascript">12 Comments</a></li>
                </ul>
                <p>{content}- desc: {description}</p>
            </div>
        </div>
    )
}
export default BlogCard