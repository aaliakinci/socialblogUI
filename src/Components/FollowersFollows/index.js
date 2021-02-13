import React from 'react'
import Follows from '../Follows';
import Followers from '../Followers';
function FollowersFollows({user}) {
	return (
		<>
		<div className="follow-btn">
				<Follows user={user}/>
			</div>
			<div className="message-btn">
				<Followers user={user}/>
			</div>
		</>
	)
}

export default FollowersFollows
