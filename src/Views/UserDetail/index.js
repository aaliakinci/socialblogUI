import { useParams } from "react-router-dom";

function UserDetail() {
	const {username} = useParams();
	console.log(username);
	return (
		<div>
			UserDetail Page
		</div>
	)
}

export default UserDetail
