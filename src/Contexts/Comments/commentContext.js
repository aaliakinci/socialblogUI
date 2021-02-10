
import {createContext} from 'react';
import axios from 'axios';


const CommentContext = createContext(null);

export const CommentProvider = ({children}) => {

	const getCommentsByArticleId = async(article_id) =>
	{
		const url = `${process.env.REACT_APP_DEPLOY_URL}/comments/${article_id}`;
		const comments = await axios(url);
		return comments
	}
	 const values ={
		getCommentsByArticleId
	}
	return <CommentContext.Provider value={values}>{children}</CommentContext.Provider>
}

export default CommentContext;