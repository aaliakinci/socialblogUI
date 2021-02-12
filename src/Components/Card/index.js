import { useEffect, useContext, useState } from 'react'
import LikeContext from '../../Contexts/LikeContext/likeContext';
import './blogCard.css'
import moment from "moment";
import blogPost01 from '../../assets/images/blog-post-01.jpg';
import { Link } from 'react-router-dom'

function BlogCard({ title, description, content, user, createAt, id, hashtags }) {

	useEffect(() => {
		if (content !== undefined) {
			const area = document.getElementById('contentArea');
			area.innerHTML = content
		}
	}, [content])

	return (
		<div className="blog-post">
			<div className="blog-thumb">
				<img src={blogPost01} alt="" />
			</div>
			<div className="down-content">
				<Link to={`/article/${id}`}>
					<h4><span>{title}</span></h4>
				</Link>
				<h6>#{hashtags}!Hastags</h6>
				<ul className="post-info">
					{
						user && <Link to={`/articles/${user[0].username}`} className="link">{user[0].username}</Link>
					}
					<li><Link to="javascript">{createAt} </Link></li>
					<li><Link to="javascript">12 Comments</Link></li>
				</ul>
				<p>{description}</p>
				{
					content && <div className="card-body" id="contentArea"></div>
				}

			</div >
		</div >
	)
}
export default BlogCard