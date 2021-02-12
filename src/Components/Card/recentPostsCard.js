import React from 'react'
import './blogCard.css'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
function BlogCard2({ title, description, content, user, createAt, id, hashtags }) {

    return (
        <div >
            <Link to={`/article/${id}`}>
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{content}</p>
            <span>
                <Moment format="YYYY/MM/DD">
						{createAt}
           	    </Moment> 
            </span>
            </Link>
        </div>
    )
}
export default BlogCard2