import {createContext} from 'react';
import axios from 'axios';

const FollowContext = createContext(null);

export const FollowProvider = ({children}) => {

	const getFollowsByArticleId = async(article_id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/likes/${article_id}`
		const response = await axios(url) ;
		const likes = response.data;
		return likes
	}

	const isFollow = async(cookie_user_id,user_id) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/users/isFollow`;
		const response = await axios.post(url,{cookie_user_id,user_id});
		console.log(response);
		return response.data
	}
	const follow = async(user_id_a,user_id_b) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/users/follow`;
	 	const response = await axios.post(url,{user_id_a,user_id_b});
		 console.log(response);
	}
	const unFollow = async(user_id_a,user_id_b) => {
		const url = `${process.env.REACT_APP_DEPLOY_URL}/users/unFollow`;
		const response = await axios.post(url,{user_id_a,user_id_b});
		console.log(response);
	}

	const values ={
		getFollowsByArticleId,
		isFollow,
		follow,
		unFollow
	}
	return <FollowContext.Provider value={values}>{children}</FollowContext.Provider>
}

export default FollowContext;