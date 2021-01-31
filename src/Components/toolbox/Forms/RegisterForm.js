import { useState } from 'react';
import './styles.css';

function RegisterForm() {
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
	const handleChange = (e) => {
		setUserDataRegister({ ...userDataRegister, ...{ [e.target.name]: e.target.value } });
	};
	const handleBlur = () => {
		console.log(document.getElementById('labelOption'));
	};
	console.log(userDataRegister);
	return (
		<form className="w-100 p-4 border shadow">
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
				<select className="form-control" name="gender" onBlur={handleBlur} onChange={handleChange}>
					<option defaultValue="selected">
						Cinsiyet Seçiniz
					</option>
					<option defaultValue="Woman">Kadın</option>
					<option defaultValue="Man">Erkek</option>
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="profilPicture" className="form-control-label">Profil Fotoğrafı</label>
				<input type="file" className="form-control-file" id="exampleFormControlFile1" />
			</div>
			<button type="submit" className="btn btn-block btnBg text-white my-2">
				Kayıt Ol
			</button>
			<p className="text-danger lead" style={{ fontSize: '12px' }}>Error</p>
		</form>
	);
}

export default RegisterForm;
