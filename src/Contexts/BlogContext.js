import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Consts/consts';

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
	const [article, setArticle] = useState({});
	const [userId, setUserId] = useState([]);
	const [user, setUser] = useState({});
	useEffect(() => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/articles/reactionPoint`
		console.log(url);
		const articles = axios.get(url);

		articles
			.then((res) => {
				return res;
			})
			.then((data) => {
				setArticles(data.data);
				return data.data
			})
	}, [setArticles]);

	const getArticleById = async (id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/articles/${id}`;
		console.log(url);
		const response = await axios(url);
		const article = response.data;
		return article;
	};
	const getUserbyUsername = async (username) => {
		const response = await axios(`${process.env.REACT_APP_DEPLOY_URL}/users/${username}`);
		return response.data
	}
	const getArticlesByUserId = async (user_id) => {
		const response = await axios(`${process.env.REACT_APP_DEPLOY_URL}/articles/byUser/${user_id}`)
		return response.data
	}
	const values = {
		articles,
		setArticles,
		getArticleById,
		article,
		setArticle,
		user,
		setUser,
		setUserId,
		userId,
		getUserbyUsername,
		getArticlesByUserId
	};

	return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
