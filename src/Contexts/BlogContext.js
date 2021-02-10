import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Consts/consts';

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
	const [articles, setArticles] = useState([]);
<<<<<<< HEAD:src/Contexts/BlogContext/BlogContext.js
	const [article, setArticle] = useState({});
	const [userId, setUserId] = useState([]);
	const [user, setUser] = useState({});
=======
>>>>>>> main:src/Contexts/BlogContext.js
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
<<<<<<< HEAD:src/Contexts/BlogContext/BlogContext.js
				return data.data
			})
	}, [setArticles, userId, setUserId]);
=======
			});
	}, [setArticles]);
>>>>>>> main:src/Contexts/BlogContext.js

	const getArticleById = async (id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/articles/${id}`;
		console.log(url);
		const response = await axios(url);
		const article = response.data;
		return article;
	};
<<<<<<< HEAD:src/Contexts/BlogContext/BlogContext.js
=======
	const getUserbyUsername = async(username) => {
		const response = await axios(`${process.env.REACT_APP_DEPLOY_URL}/users/${username}`);
	   return response.data
	}
  const getArticlesByUserId = async(user_id)=> {
		const response = await axios(`${process.env.REACT_APP_DEPLOY_URL}/articles/byUser/${user_id}`)
		return response.data
	}
>>>>>>> main:src/Contexts/BlogContext.js
	const values = {
		articles,
		setArticles,
		getArticleById,
<<<<<<< HEAD:src/Contexts/BlogContext/BlogContext.js
		article,
		setArticle,
		user,
		setUser,
		setUserId,
		userId
=======
		getUserbyUsername,
		getArticlesByUserId
>>>>>>> main:src/Contexts/BlogContext.js
	};

	return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
