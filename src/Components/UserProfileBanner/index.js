import {useEffect,useState,useContext} from 'react';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import Follow from '../Follow';
import './userProfile.css'

function UserProfileBanner({ user }) {
	const [cookieUser, setCookieUser] = useState({})
	const {userFromCookie} = useContext(CookieContext);
	useEffect(() => {
		const userCookie = userFromCookie('user');
	  setCookieUser(userCookie);
	}, [])
	return (
		<>
			{
				user &&
				<div className="user-info-card mx-0 card">
					<div className="card-body">
						<div className="user-info">
							<div className="user-image profileUserpic">
								<img
									src={user.profilPicture}
									className="img-responsive"
									alt=""
								/>
							</div>
							<div className="user-info-text">
								<div className="d-flex">
									<div>
										<span className="user-name">{user.name} {user.surname}</span>
									</div>
									{
										user._id!==cookieUser._id?<Follow user={user} cookieUser={cookieUser}/>:""
									}
								</div>
								<div className="create-at">
									{user.createAt}
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	);
}

export default UserProfileBanner;
