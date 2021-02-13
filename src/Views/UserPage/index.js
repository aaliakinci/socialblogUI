import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import BlogContext from '../../Contexts/BlogContext/BlogContext';
import UserProfileBanner from '../../Components/UserProfileBanner';
import Card from '../../Components/Card';
function UserPage() {
	const { getUserbyUsername, getArticlesByUserId } = useContext(BlogContext);
	const [user, setUser] = useState();
	const [articles, setArticles] = useState([])
	const { username } = useParams();
  
	useEffect(() => {
		async function fetchUserAndArticles() {
			const user = await getUserbyUsername(username);
			const articles = await getArticlesByUserId(user[0]._id);
			setUser(user[0]);
			setArticles(articles);
		}
		fetchUserAndArticles();
	}, [username, getUserbyUsername, getArticlesByUserId]);
	console.log(articles);
	return (
		<section className="blog-posts">
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div className="row">
							<div className="col-12">
								<UserProfileBanner setArticles={setArticles} articles={articles} user={user} />
							</div>
							<div className="col-12">
								{articles.length>0 &&
									articles.map((article) => {
										return (
											<Card
												key={article._id}
												id={article._id}
												title={article.title}
												description={article.description}
												content={article.content}
												createAt={article.createAt}
												user={article.user}
											/>
										);
									})}
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<Sidebar />
					</div>
				</div>
			</div>
		</section>
	);
}

export default UserPage;
