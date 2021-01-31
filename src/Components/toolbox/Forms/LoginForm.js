import { useState } from 'react'
import './styles.css'
function LoginForm() {
	const [userDataLogin, setUserDataLogin] = useState({
		username: "",
		password: ""
	})
	return (
		<form className="w-100 p-4 border shadow">
			<div className="form-group">
				<label htmlFor="username">
					Kullanıcı adınız <span className="text-danger">*</span>
				</label>
				<input name="username" className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
					Şifreniz <span className="text-danger">*</span>
				</label>
				<input name="password" type="password" className="form-control" />
			</div>
			<button type="submit" className="btn btn-block btnBg text-white my-2">
				Giriş
			</button>
			<p className="text-danger lead" style={{ fontSize: '12px' }}>Error</p>
		</form>
	)
}

export default LoginForm
