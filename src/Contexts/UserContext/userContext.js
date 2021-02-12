import {createContext} from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export const UserProvider = ({children}) => {

	const getAllUsers = async()=>{
		const url = `${process.env.REACT_APP_DEPLOY_URL}/users`
		const response = await axios(url)
		return response.data
	}

	const values ={
		getAllUsers,
		 
	}
	return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContext;