import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../Consts/consts';

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
	const [article, setArticle] = useState({});
	const [userId, setUserId] = useState([]);
	const [user, setUser] = useState({});
	useEffect(() => {
		const articles = axios.get(`${API_BASE_URL}/articles`);
		articles
			.then((res) => {
				return res;
			})
			.then((data) => {
				setArticles(data.data);
				return data.data
			})
	}, [setArticles, userId, setUserId]);

	const getArticleById = async (id) => {
		const url = `http://167.99.132.119:4000/articles/${id}`;
		const response = await axios(url);
		const article = response.data;
		return article;
	};
	const values = {
		articles,
		setArticles,
		getArticleById,
		article,
		setArticle,
		user,
		setUser,
		setUserId,
		userId
	};

	return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
