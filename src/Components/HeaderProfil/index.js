import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import styles from './styles.module.css'
function HeaderProfil() {
	const { removeCookie } = useContext(CookieContext);

	const logOut = () => {
		removeCookie('user');
	};

	return (
		<li className={`nav-item dropdown ${styles.navIitem}`}>
			<Link to="/hesabim/kullanici-bilgileri" className={`nav-link  dropdown-toggle ${styles.cartIcon}`} style={{fontSize:'1.5rem'}}>
				<i className="fa fa-user-circle" aria-hidden="true" ></i>
				Hesabım
			</Link>
			<ul className={`dropdown-menu ${styles.dropdownMenu}`}>
				<li className={`dropdown-item ${styles.linkcolor}`}>
					<Link to="/profile" className={`dropdown-item ${styles.linkcolor}`}>
						<i className="fa fa-user" aria-hidden="true"></i> Kullanıcı Bilgilerim
					</Link>
				</li>
				<li className={`dropdown-item ${styles.linkcolor}`} onClick={() => logOut()}>
					<Link to="/" className={`dropdown-item ${styles.linkcolor}`}>
						<i className="fa fa-sign-out" aria-hidden="true"></i> Çıkış Yap
					</Link>
				</li>
			</ul>
		</li>
	);
}

export default HeaderProfil;
