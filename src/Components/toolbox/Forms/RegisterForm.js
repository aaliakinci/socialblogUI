import { useState, useContext } from 'react';
import './styles.css';
import axios from 'axios';
import CookieContext from '../../../Contexts/CookieContext/cookieContext';
import { Redirect } from 'react-router-dom';

function RegisterForm() {

	const { setUserCookie, isCookie } = useContext(CookieContext);

	const [errorMessage, setErrorMessage] = useState('');

	const [userDataRegister, setUserDataRegister] = useState({
		name: '',
		surname: '',
		username: '',
		password: '',
		confirmPassword: '',
		phoneNumber: '',
		email: '',
		gender: '',
	});

	const [file, setFile] = useState();

	const result = isCookie('user');
	if (result === 1) {
		return <Redirect to="/" />;
	}

	// const url = `${process.env.REACT_APP_CLIENT_URL}/`
	const handleSubmit = async (e) => {
		setErrorMessage('');
		e.preventDefault();
		if (
			userDataRegister.name === '' ||
			userDataRegister.surname === '' ||
			userDataRegister.password === '' ||
			userDataRegister.confirmPassword === '' ||
			userDataRegister.phoneNumber === '' ||
			userDataRegister.email === '' ||
			userDataRegister.gender === ''
		) {
			setErrorMessage('* ile  işaretli alanlar boş bırakılamaz');
			return 0
		}
		const { name, surname, username, password, phoneNumber, email, gender } = userDataRegister;
		const data = new FormData();
		data.append('name', name);
		data.append('surname', surname);
		data.append('username', username);
		data.append('password', password);
		data.append('phoneNumber', phoneNumber);
		data.append('email', email);
		data.append('gender', gender);
		data.append('profilPicture', file);
		const config = {
			headers: { 'content-type': 'multipart/form-data' },
		};

		const response = await axios.post(`${process.env.REACT_APP_DEPLOY_URL}/users/register`, data, config);
		console.log(response);
		if (response.data.code === 11000)
			setErrorMessage('Bu kullanıcı zaten mevcut,üyeyseniz lütfen giriş yapınız.');

		console.log(response);
		if (response.data.token) {
			setUserCookie('user', response.data.token);
			window.location.to = '/';
		}
	};

	const handleChange = (e) => {
		setUserDataRegister({ ...userDataRegister, ...{ [e.target.name]: e.target.value } });
	};
	const handleFile = (e) => {
		setUserDataRegister({ ...userDataRegister, ...{ [e.target.name]: e.target.files[0] } });
		setFile(e.target.files[0]);
	};

	return (
		<form className="w-100 p-4 border shadow" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">
					Adınız <span className="text-danger">*</span>
				</label>
				<input name="name" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="surname">
					Soyadınız <span className="text-danger">*</span>
				</label>
				<input name="surname" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="username">
					Kullanıcı adınız <span className="text-danger">*</span>
				</label>
				<input name="username" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
					Şifreniz <span className="text-danger">*</span>
				</label>
				<input name="password" type="password" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="confirmPassword" className="form-control-label">
					Tekrar Şifreniz <span className="text-danger">*</span>
				</label>
				<input
					name="confirmPassword"
					type="password"
					className="form-control"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="phoneNumber" className="form-control-label">
					Telefon Numaranız<span className="text-danger">*</span>
				</label>
				<input name="phoneNumber" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="email" className="form-control-label">
					E-posta Adresiniz<span className="text-danger">*</span>
				</label>
				<input name="email" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="gender" className="form-control-label">
					Cinsiyet <span className="text-danger">*</span>{' '}
				</label>
				<select className="form-control" name="gender" onChange={handleChange}>
					<option defaultValue="selected">Cinsiyet Seçiniz</option>
					<option defaultValue="Woman">Kadın</option>
					<option defaultValue="Man">Erkek</option>
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="profilPicture" className="form-control-label">
					Profil Fotoğrafı
				</label>
				<input
					type="file"
					name="profilPicture"
					className="form-control-file"
					id="profilPicture"
					onChange={handleFile}
				/>
			</div>
			<button type="submit" className="btn btn-block btnBg text-white my-2">
				Kayıt Ol
			</button>
			{errorMessage !== '' && <small className="text-danger lead">{errorMessage}</small>}
			<p className="text-danger lead" style={{ fontSize: '12px' }}>
				Error
			</p>
		</form>
	);
}

export default RegisterForm;
