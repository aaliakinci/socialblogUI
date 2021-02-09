import { useEffect, useContext, useState } from 'react';
import Sidebar from '../../Components/Sidebar';
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card';
import Comments from '../../Components/Comments/index';
import SubmitComment from '../../Components/SubmitComment/index';
import BlogContext from '../../Contexts/BlogContext';
const BlogPage = () => {
	const { getArticleById } = useContext(BlogContext);
	const [article, setArticle] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetchArticle = async (id) => {
			const data = await getArticleById(id);
			return data;
		};
		const response = fetchArticle(id);
		response.then((data) => setArticle(data[0]));
	}, [id, getArticleById]);
 
	return (
		<>
			<section className="blog-posts" style={{ paddingTop: '150px' }}>
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
								<Comments article_id={article._id}/>
							<SubmitComment article={article}/></>
								
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
