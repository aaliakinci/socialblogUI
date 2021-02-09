import {useEffect} from 'react'
import './blogCard.css'
import blogPost01 from '../../assets/images/blog-post-01.jpg';
import {Link} from 'react-router-dom'
//import blogPost02 from '../../assets/images/blog-post-02.jpg';

 function BlogCard({ title, description, content, user,createAt, id }) {
	 
	console.log(content);
	useEffect(() => {
		if(content!==undefined)
	{
		console.log('girdiiim');
		const area = document.getElementById('contentArea');
		area.innerHTML=content
	}
	}, [content])
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
										user && user[0].username
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