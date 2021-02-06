import { useEffect, useContext, useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card';
import Comments from '../../Components/Comments/index';
import SubmitComment from '../../Components/SubmitComment/index';
import BlogContext from '../../Contexts/BlogContext';
const BlogDetail = () => {
	const { getArticleById } = useContext(BlogContext);
	const [article, setArticle] = useState({})
	const { id } = useParams();

	useEffect(() => {
		const fetchArticle = async () => {
			const data = await getArticleById(id);
			setArticle(data[0]);
		}
		fetchArticle();
	}, [id, getArticleById]);
	console.log(article);
	return (
		<>
			<section className="blog-posts" style={{ paddingTop: '150px' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<Card
								id={article._id}
								title={article.title}
								description={article.description}
								content={article.content}
								user={article.user}
								// username={article.user}
								createAt={article.createAt}
							/>
							<Comments />
							<SubmitComment />
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

export default BlogDetail;
