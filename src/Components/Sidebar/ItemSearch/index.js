import { useEffect, useState, useContext } from 'react';
import './itemSearch.css';
import SearchBar from '../../SearchBar';
import UserContext from '../../../Contexts/UserContext/userContext';
function ItemSearch() {
	const { getAllUsers } = useContext(UserContext);
	const [selectedUser, setSelectedUser] = useState({});
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchUsers = async () => {
			const allUsers = await getAllUsers();
			setUsers(allUsers);
		};
		fetchUsers();
	}, []);
	console.log(users);
	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `/articles/${selectedUser}`;
		window.location.href = url;
	};
	return (
		<div className="sidebar-item search">
			<form id="search_form" onSubmit={handleSubmit}>
				<SearchBar
					setSelectedData={setSelectedUser}
					data={users}
					returnValue="username"
					searchValue="username"
					holder="Bir Kullanıcı adı giriniz"
				/>
			</form>
		</div>
	);
}
export default ItemSearch;
