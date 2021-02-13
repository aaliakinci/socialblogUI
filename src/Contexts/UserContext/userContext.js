import {createContext} from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export const UserProvider = ({children}) => {

	const getAllUsers = async()=>{
		const url = `${process.env.REACT_APP_DEPLOY_URL}/users`
		const response = await axios(url)
		return response.data
	}
	const getAllFollows = async(user_id)=>{
		const url = `${process.env.REACT_APP_DEPLOY_URL}/users/userFollows`;
		const response = await axios.post(url,{user_id})
		return response.data
	}
	const getAllFollowers = async(user_id)=>{
		const url = `${process.env.REACT_APP_DEPLOY_URL}/users/userFollowers`;
		const response = await axios.post(url,{user_id})
		return response.data
	}
	const values ={
		getAllUsers,
		getAllFollows,
		getAllFollowers
	}
	return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContext;