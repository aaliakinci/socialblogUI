
import {createContext,useState} from 'react';
import axios from 'axios';


const HashtagContext = createContext(null);

export const HashtagProvider = ({children}) => {
 

	const getHashtags = async() =>
	{
		const url = `${process.env.REACT_APP_DEPLOY_URL}/hashtags/`;
		const response = await axios(url);
		return response.data
	}

	const getArticleByHashtagId =async(id)=>{
		const url = `${process.env.REACT_APP_DEPLOY_URL}/hashtags/${id}`;
		const response = await axios(url);
		return response.data
	}


	 const values ={
		getHashtags,
		getArticleByHashtagId,
 
	}
	return <HashtagContext.Provider value={values}>{children}</HashtagContext.Provider>
}

export default HashtagContext;