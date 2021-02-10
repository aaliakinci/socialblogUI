import { useState } from 'react';
import UserImage1 from '../../assets/images/comment-author-01.jpg';
import UserImage2 from '../../assets/images/comment-author-02.jpg';

function Comment({ comment }) {
	const [user, setUser] = useState(comment.user[0]);
	return (
		<li className="d-flex align-items-center">
			<div className="author-thumb">
				<img src={user.profilPicture} alt="" />
			</div>
			<div className="right-content">
				<h4>
					{user.name}
					<span>May 16, 2020</span>
				</h4>
				<p>{comment.description}</p>
			</div>
		</li>
	);
}
export default Comment;
