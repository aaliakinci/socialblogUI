import React from 'react';
import './userProfile.css'

import img1 from '../../assets/images/comment-author-01.jpg';
function UserProfileBanner({ user }) {
	console.log(user);
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
									<div className="follow-btn">
										<button>Follow</button>
									</div>
									<div className="message-btn">
										<button>Message</button>
									</div>
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
