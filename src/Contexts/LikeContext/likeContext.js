
import {createContext} from 'react';
import axios from 'axios';


const LikeContext = createContext(null);

export const LikeProvider = ({children}) => {

	const getLikesByArticleId = async(article_id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/likes/${article_id}`
		const response = await axios(url) ;
		const likes = response.data;
		return likes
	}

	const isLike = async(article_id,user_id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/likes/isLike`;
		const response = await axios.post(url,{user_id,article_id});	
		return response.data
	}
	const createLike = async(article_id,user_id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/likes/create`;
		await axios.post(url,{article_id,user_id});
	}
	const deleteLike = async(article_id,user_id,like_id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/likes/delete`;
		const response = await axios.delete(url,{article_id,user_id,like_id});
		console.log(response);
	}

	const values ={
		getLikesByArticleId,
		isLike,
		createLike,
		deleteLike
	}
	return <LikeContext.Provider value={values}>{children}</LikeContext.Provider>
}

export default LikeContext;