import React from 'react'
import './blogCard.css'
import moment from "moment";
//import blogPost02 from '../../assets/images/blog-post-02.jpg';

function BlogCard2({ title, description, content, user, createAt, id, hashtags }) {

    return (
            <div >
                <a href={`/article/${id}`}>
                <h5>{title}</h5>
                <span href="javascript">  {moment({createAt}).format("l")} </span>
                 </a>
            </div>
    )
}
export default BlogCard2