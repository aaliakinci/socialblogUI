import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import '../Header/header.css'
function HeaderProfil({ user }) {
	const { removeCookie } = useContext(CookieContext);
	const logOut = () => {
		removeCookie('user');
	};

	return (
		<>
			<li className="dropdown nav-item">
				<Link to={`/articles/${user.username}`} className="nav-link dropdown-toggle cart-icon">
					Hesabım
				</Link>
				<ul className={`dropdown-menu`}>
					<li className={`dropdown-item link-color`}>
						<Link to="/profile" className={`link-color`}>
							<i className="fa fa-user" aria-hidden="true"></i> Kullanıcı Bilgilerim
					</Link>
					</li>
					<li className={`dropdown-item link-color`} >
						<Link to="/" className={`link-color`} onClick={() => logOut()}>
							<i className="fa fa-sign-out" aria-hidden="true"></i> Çıkış Yap
					</Link>
					</li>
				</ul>
			</li>
		</>
	);
}

export default HeaderProfil;
