
import {useState,useContext} from 'react'
import { Redirect } from 'react-router-dom';
import CookieContext from '../../../Contexts/CookieContext/cookieContext'
import axios from 'axios'
import './styles.css'
function LoginForm() {
	const [errorMessage, setErrorMessage] = useState("")
	const [userDataLogin, setUserDataLogin] = useState({
		username: "",
		password: ""
	})
	const {setUserCookie,isCookie} = useContext(CookieContext);

	const result = isCookie('user');
	if(result===1)return <Redirect to="/"/>


	const handleSubmit = async(e) => {
		e.preventDefault();
		if(userDataLogin.username===""||userDataLogin.password==="")setErrorMessage('* ile işaretli alanlar boş bırakılamaz !')
		const response = await axios.post(`${process.env.REACT_APP_DEPLOY_URL}/users/login`,userDataLogin)
		console.log(response);
		if(response.data.message){
			setErrorMessage(response.data.message)
			return false
		}
		if(response.data.token){
			setUserCookie('user',response.data.token)
			window.location.reload();
		}
	}

	const handleChange = e => {
		setUserDataLogin({...userDataLogin,...{[e.target.name]:e.target.value}})
	}


	return (
		<form className="w-100 p-4 border shadow" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="username">
					Kullanıcı adınız <span className="text-danger">*</span>
				</label>
				<input name="username" className="form-control" onChange={handleChange}/>
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
					Şifreniz <span className="text-danger">*</span>
				</label>
				<input name="password" type="password" className="form-control" onChange={handleChange}/>
			</div>
			<button type="submit" className="btn btn-block btnBg text-white my-2">
				Giriş
			</button>

			{
				errorMessage!=="" && <small className="text-danger lead">{errorMessage}</small>
			}

		</form>
	)
}

export default LoginForm
