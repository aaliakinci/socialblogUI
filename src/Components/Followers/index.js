import { useEffect, useContext, useState } from 'react';
import UserContext from '../../Contexts/UserContext/userContext';
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import Follow from '../Follow'
function Followers({ user }) {
	const { getAllFollowers } = useContext(UserContext);
	const { userFromCookie } = useContext(CookieContext);
	const [cookieUser, setCookieUser] = useState({});

	const [followers, setFollowers] = useState([]);
	const fetchFollowers = async () => {
		const data = await getAllFollowers(user._id);
		setFollowers(data[0].followers);
	};
	useEffect(() => {
		fetchFollowers();
		const userCookie = userFromCookie('user');
		setCookieUser(userCookie);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userFromCookie]);
	return (
		<div>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#followers"
			>
				Takipçiler
			</button>

			<div
				className="modal fade"
				id="followers"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLongTitle"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">
								Takipçiler
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{followers.map((followers) => (

								<div className="user-info-card mx-0">
									<div className="user-info">
										<div className="user-image profileUserpic">
											<img src={followers.profilPicture} className="img-responsive" alt="" />
										</div>
										<div className="user-info-text">
											<div className="d-flex">
												<div>
													<span className="user-name">
														{followers.name} {followers.surname}
													</span>
												</div>
												<Follow user={followers} cookieUser={cookieUser} />
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Followers;
