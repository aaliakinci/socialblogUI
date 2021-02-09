import React from 'react';
import styles from './styles.module.css'
function UserProfileBanner({user}) {
	console.log(user);
	return (
		<>
			{
				user && 
				<>
				<div class={`d-flex justify-content-center ${styles.profileUserpic}`}>
				<img
					src={user.profilPicture}
					class="img-responsive"
					alt=""
				/>
			</div>

			<div class={`${styles.profileUsertitle}`}>
				<div class={`${styles.profileUsertitleName}`}>{user.name} {user.surname}</div>
				<div class={`${styles.profileUsertitleJob}`}>Developer</div>
			</div>

			<div class={`${styles.profileUserbuttons}`}>
				<button type="button" class="btn btn-success btn-sm mr-3">
					Follow
				</button>
				<button type="button" class="btn btn-danger btn-sm">
					Message
				</button>
			</div>
				</>
				
			}
		</>
	);
}

export default UserProfileBanner;
