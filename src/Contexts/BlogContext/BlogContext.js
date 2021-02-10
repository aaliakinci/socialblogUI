import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Consts/consts';

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
	const [article, setArticle] = useState({})
	useEffect(() => {
		const articles = axios.get(`${API_BASE_URL}/articles/reactionPoint`);
		articles
			.then((res) => {
				return res;
			})
			.then((data) => {
				setArticles(data.data);
			});
	}, [setArticles]);



	const getArticleById = async (id) => {
		const url = `http://localhost:4000/articles/${id}`;
		console.log(url);
		const response = await axios(url);
		const article = response.data;
		return article;
	};
	const getUserbyUsername = async(username) => {
		const response = await axios(`http://localhost:4000/users/${username}`);
	   return response.data
	}
  const getArticlesByUserId = async(user_id)=> {
		const response = await axios(`http://localhost:4000/articles/byUser/${user_id}`)
		return response.data
	}
	const values = {
		articles,
		setArticles,
		getArticleById,
		article,
		setArticle
	};

	return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
