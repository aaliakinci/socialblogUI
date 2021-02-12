import {useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom';
import HashtagContext from '../../Contexts/HashtagContext/hashtagContext';
function HashtagArticle() {
	const {id} = useParams();
	const {getArticleByHashtagId}=useContext(HashtagContext);
	const [articles, setArticles] = useState([])
	useEffect(() => {
		 const fetchArticleByHashtagId = async() =>{
			const articles = await getArticleByHashtagId(id);
			setArticles(articles)
		 }
		 fetchArticleByHashtagId();
	}, [])
	console.log(articles);
	return (
		<div>
			Hashtag Article
		</div>
	)
}

export default HashtagArticle
