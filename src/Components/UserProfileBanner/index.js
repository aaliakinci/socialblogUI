import React from 'react';
import './userProfile.css'

import img1 from '../../assets/images/comment-author-01.jpg';
function UserProfileBanner({ user }) {
	return (
		<>
			{
				user &&
				<div className="user-info-card mx-0">
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
					<div className="d-flex align-items-end">
						<i class="fa fa-users fa-2x friends"></i>
						<i class="fa fa-heart fa-2x likes"></i>
					</div>
				</div>
			}
		</>
	);
}

export default UserProfileBanner;
