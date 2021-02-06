import { useContext, useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
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
	}, [setIsUser, isUserCookie]);
 
	useEffect(() => {
		if (isUser === 1) {
			const { _id, username } = userFromCookie('user');
			setUser({
				_id,
				username,
			});
		}
	}, [isUser, isUserCookie, userFromCookie, setUser]);
	console.log(user);
	return (
		<header className="">
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<a href="/" className="navbar-brand">
						<img src={Logo} alt="" />
					</a>
					<button
						className="navbar-toggler collapsed"
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
						<ul className="navbar-nav ml-auto">
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
										<Link
											to="/yazi-yaz"
											className="nav-link d-flex align-items-center bg-info	px-4 rounded"
										>
											<i className="fa fa-edit fa-2x text-danger"></i>Yazı Yaz
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to={`/user/${user.username}`}
											className="nav-link d-flex align-items-center"
										>
											<i className="fa fa-user fa-2x "></i>Profil
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
export default Header;
