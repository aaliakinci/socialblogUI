import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Consts/consts';

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const articles = axios.get(`${API_BASE_URL}/articles`);
		articles
			.then((res) => {
				return res;
			})
			.then((data) => {
				console.log(data.data);
				setArticles(data.data);
			});
	}, [setArticles]);

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
	};

	return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
