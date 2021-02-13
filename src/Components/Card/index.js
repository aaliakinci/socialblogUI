import { useEffect } from 'react'
import './blogCard.css'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

function BlogCard({ title, description, content, user, createAt, id, hashtags, image }) {
	useEffect(() => {
		if (content !== undefined) {
			const area = document.getElementById('contentArea');
			area.innerHTML = content
		}
	}, [content])
	const handleHref = () => {
		window.location.href = `/articles/${user[0].username}`
	}
	console.log(image)

	return (
		<div className="blog-post">
			{
				image && <div className="blog-thumb">
					<img src={image} alt="" />
				</div>
			}
			{
				user && <div className="border">
					<img src={user[0].profilPicture} className="img-responsive user-img" alt="" onClick={handleHref} />
					<div className="d-inline user-info" onClick={handleHref}>{user[0].name}  </div>
					<div className="d-inline user-info" onClick={handleHref}>{user[0].surname}</div>
				</div>
			}
			<div className="down-content">
				<Link to={`/article/${id}`}>
					<h4><span>{title}</span></h4>
				</Link>
				{hashtags && hashtags.map(hashtag => (<h6 key={hashtag._id}>#{hashtag.body}</h6>))}
				<ul className="post-info">
					<li className="link">
						<Moment format="YYYY/MM/DD">
							{createAt}
						</Moment></li>
				</ul>
				<p>{description}</p>
				{
					content && <div id="contentArea"></div>
				}

			</div >
		</div >
	)
}
export default BlogCard