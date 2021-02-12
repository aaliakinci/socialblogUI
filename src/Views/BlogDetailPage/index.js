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
	const { userFromCookie } = useContext(CookieContext);
	const { getLikesByArticleId } = useContext(LikeContext)
	const [article, setArticle] = useState();
	const [user, setUser] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetchArticle = async (id) => {
			const data = await getArticleById(id);
			return data;
		};
		const response = fetchArticle(id);
		response.then((data) => setArticle(data[0]));
		const user = userFromCookie('user');
		setUser(user);
		
	}, [id, getArticleById]);

	console.log(article);

	return (
		<>
			<section className="blog-posts">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{article && (
								<>
									<Card
										id={article._id}
										title={article.title}
										description={article.description}
										content={article.content}
										user={article.user}
										createAt={article.createAt}
									/>
									<Comments article_id={article._id} />
									<SubmitComment article={article} />
								</>
							)}
						</div>
						{
							article && <Like article_id={article._id} user_id={user._id} />
						}
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
