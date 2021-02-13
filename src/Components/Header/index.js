import { useContext, useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import HeaderProfil from '../HeaderProfil';
function Header() {
	const { isUserCookie, isCookie, userFromCookie } = useContext(CookieContext);
	const [isUser, setIsUser] = useState(0);

	const [user, setUser] = useState({
		_id: '',
		username: '',
	});

	useEffect(() => {
		const result = isCookie('user');
		setIsUser(result);
	}, [setIsUser, isUserCookie, isCookie]);

	useEffect(() => {
		if (isUser === 1) {
			const { _id, username } = userFromCookie('user');
			setUser({
				_id,
				username,
			});
		}
	}, [isUser, isUserCookie, userFromCookie, setUser]);
	return (
		<header className=" sticky-top">
			<div className="container-md p-0">
				<nav className="navbar navbar-expand-sm p-0">
					<Link to="/" className="navbar-brand">
						<img src={Logo} className="mt-3" alt="" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto d-flex align-items-center">
							{isUser === 0 && (
								<>
									<li className="nav-item">
										<Link to="/" className="nav-link">
											Home <span className="sr-only">(current)</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/login" className="nav-link">
											<i className="fa fa-user"></i> Log in
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/register" className="nav-link">
											Register
										</Link>
									</li>
								</>
							)}
							{isUser === 1 && (
								<>
									<li className="nav-item">
										<Link to={`/articles/${user.username}`}>
											<HeaderProfil user={user} />
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/write-article" className="write-icon">
											<i className="fa fa-edit fa-lg"></i>
										</Link>
									</li>
								</>
							)}
						</ul>
					</div >
				</nav >
			</div >
		</header >
	);
}
export default Header;
