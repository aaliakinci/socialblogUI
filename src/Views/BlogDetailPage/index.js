import { useEffect, useContext, useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card';
import Comments from '../../Components/Comments/index';
import SubmitComment from '../../Components/SubmitComment/index';
import BlogContext from '../../Contexts/BlogContext/BlogContext';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import LikeContext from '../../Contexts/LikeContext/likeContext';

import Like from '../../Components/Like';
const BlogPage = () => {
	const { getArticleById } = useContext(BlogContext);
	const { userFromCookie,isCookie } = useContext(CookieContext);
	const { getLikesByArticleId } = useContext(LikeContext)
	const [article, setArticle] = useState();
	const [user, setUser] = useState();
	const { id } = useParams();

	const fetchArticle = async (id) => {
		const data = await getArticleById(id);
		return data;
	};

	useEffect(() => {
		const response = fetchArticle(id);
		response.then((data) => setArticle((oldData)=>data[0]));
		 const result = isCookie('user');
		 if(result===1){
			const user = userFromCookie('user');
			setUser(user);
		 }
		
	}, [id, getArticleById]);
 
	return (
		<>
			<section className="blog-posts">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{article && (
								<>
									<Card
										key={article._id}
										id={article._id}
										title={article.title}
										description={article.description}
										content={article.content}
										user={article.user}
										createAt={article.createAt}
										image={article.contentImage}
									/>
									{ user &&
										article && <Like article_id={article._id} user_id={user._id} />
									}
									<Comments article_id={article._id} />
									<SubmitComment article={article} />
								</>
							)}

						</div>
						<div className="col-lg-4">
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPage;
