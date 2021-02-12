import React from 'react'
import './blogCard.css'
import moment from "moment";
import { Link } from 'react-router-dom'
//import blogPost02 from '../../assets/images/blog-post-02.jpg';

function BlogCard2({ title, description, content, user, createAt, id, hashtags }) {

    return (
        <div >
            <Link to={`/article/${id}`}>
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{content}</p>
                <span>{moment({ createAt }).format("l")} </span>
            </Link>
        </div>
    )
}
export default BlogCard2