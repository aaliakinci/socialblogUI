import { useEffect, useContext, useState } from 'react';
import LikeContext from '../../Contexts/LikeContext/likeContext';
function Like({ article_id, user_id }) {

	const { isLike, createLike, deleteLike, getLikesByArticleId } = useContext(LikeContext);
	const [userIsLike, setUserIsLike] = useState(false);
	const [like, setLike] = useState({});
	const [articleLikes, setArticleLikes] = useState([]);
	const [likeCount, setLikeCount] = useState(0)

	const fetchLikes = async () => {
		const fetchLikes = await getLikesByArticleId(article_id)
		setArticleLikes(fetchLikes)
		setLikeCount(fetchLikes.length)
	}
	const fetchIsLike = async () => {
		const userLike = await isLike(article_id, user_id);
		setLike(userLike);
		if (userLike.length === 1) {
			setUserIsLike(true)
			return 0
		}
		setUserIsLike(false)
	}

	useEffect(() => {
		fetchIsLike();
		fetchLikes();
	}, [article_id, user_id, isLike, setUserIsLike, fetchIsLike])

	const handleClick = async () => {
		setUserIsLike(!userIsLike);
		if (userIsLike === false) {
			createLike(article_id, user_id);
			setLikeCount(articleLikes.length + 1)
			return 0
		}
		deleteLike(article_id, user_id, like._id);
		setLikeCount(articleLikes.length - 1);
	};
	return (
		<div>
			{userIsLike === false ? (
				<span>
					<i className="fa fa-heart fa-2x mr-2" onClick={handleClick}></i>{likeCount}
				</span>
			) : (
				<span>
					<i className="fa fa-heart fa-2x mr-2" onClick={handleClick} style={{ color: 'red' }}></i>{likeCount}
				</span>
			)}
		</div>
	);
}

export default Like;
