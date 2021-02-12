import { useContext, useEffect, useState } from 'react';
import './sidebarTags.css';
import { Link } from 'react-router-dom';
import HashtagContext from '../../../Contexts/HashtagContext/hashtagContext';
import Loading from '../../Loading';
function SidebarTags() {
	const { getHashtags } = useContext(HashtagContext);
	const [hashtags, setHashtags] = useState([]);
	useEffect(() => {
		const fetchHashtags = async () => {
			const hashtags = await getHashtags();
			setHashtags(hashtags);
		};
		fetchHashtags();
	}, []);
	return (
		<div className="sidebar-item tags">
			<div className="sidebar-heading">
				<h2>#Hashtag</h2>
			</div>
			<div className="content">
				<ul>
					{hashtags.length && hashtags.length > 0
						? hashtags.map((hashtag) => <li key={hashtag._id}><Link to={`/hashtag/${hashtag._id}`}>{hashtag.body}</Link></li>)
						: <Loading />}
				</ul>
			</div>
		</div>
	);
}
export default SidebarTags;
