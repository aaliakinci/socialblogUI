<<<<<<< HEAD
import React, { useState, useContext, useEffect } from 'react'
import './blogCard.css'
import blogPost01 from '../../assets/images/blog-post-01.jpg';
import BlogContext from '../../Contexts/BlogContext/BlogContext';
import { Link } from 'react-router-dom'
//import blogPost02 from '../../assets/images/blog-post-02.jpg';

function BlogCard({ title, description, content, user, createAt, id, getUsername }) {
=======
import {useEffect,useContext,useState} from 'react'
import LikeContext from '../../Contexts/LikeContext/likeContext';
import './blogCard.css'
import blogPost01 from '../../assets/images/blog-post-01.jpg';
import {Link} from 'react-router-dom'

 function BlogCard({ title, description, content, user,createAt, id }) {
	const {getLikesByArticleId} = useContext(LikeContext)
	const [likes, setLikes] = useState()
	console.log(id);
	useEffect(() => {
		const fetchLikes = async() => {
			const likes = await getLikesByArticleId(id)
			setLikes(likes)
		}
		fetchLikes();
	}, [getLikesByArticleId,id])
	useEffect(() => {
		if(content!==undefined)
	{
		const area = document.getElementById('contentArea');
		area.innerHTML=content
	}
	}, [content])
>>>>>>> main
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
										user && <Link to={`/articles/${user[0].username}`}>{user[0].username}</Link>
									}
                    {/* <li><a href="javascript"> {user_id} </a></li> */}
                    <li><a href="javascript"> {createAt} </a></li>
                    <li><a href="javascript">12 Comments</a></li>
                </ul>
                <p>{description}</p>
								{content && <div className="card-body" id="contentArea"></div>
									}
								
            </div>
        </div>
    )
}
export default BlogCard