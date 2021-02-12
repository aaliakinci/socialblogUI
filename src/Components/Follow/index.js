
import {useContext,useEffect,useState} from 'react';
import FollowContext from '../../Contexts/FollowContext/followContext'

function Follow({user,cookieUser}) 
{
const {isFollow,follow,unFollow} = useContext(FollowContext)
const [userIsFollow, setUserIsFollow] = useState(false);
const [followsCount,setFollowsCount]=useState(user.followers.length)
	const fetchIsFollows = async () => {	
	 const userFollows=await isFollow(cookieUser._id,user._id);
	 if(userFollows>-1)
	 {
		 setUserIsFollow(true)
		 return 0
	 }
	 setUserIsFollow(false)
	} 
	const handleClick = async () => {
		setUserIsFollow(!userIsFollow);
		if(userIsFollow===false){
			follow(cookieUser._id,user._id);
			setFollowsCount(user.followers.length+1)
			return 0
		}
		unFollow(cookieUser._id,user._id);
		setFollowsCount(user.followers.length-1);
	};

useEffect(() => {
	fetchIsFollows();
}, [])

	return (
		<>
			<div className="follow-btn">
				{
					userIsFollow===false?<button onClick={handleClick}>Follow({followsCount})</button>:<button onClick={handleClick}>Unfollow({followsCount})</button>
				}
			</div>
			<div className="message-btn">
				<button>Message</button>
			</div>
		</>
	);
}

export default Follow;
