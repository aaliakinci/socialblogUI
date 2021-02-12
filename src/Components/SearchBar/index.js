import { useState, useEffect } from 'react';
import styles from './styles.module.css';
function SearchBar({ setSelectedData, data,returnValue,searchValue}) {
	const [search, setSearch] = useState('');
	const [filterData, setFilterData] = useState([]);
	const [searchField, setSearchField] = useState(searchValue);
	const [returnField, setReturnField] = useState(returnValue);
	const changeFilter = (searchField,returnField) => {
		if (filterData.length > 0) {
			if (filterData.length < 2 && search === filterData[0].searchField) {
				setSelectedData(filterData[0].returnField);
				setFilterData([]);
			}
		}
	}
	const fetchData = async (searchField) => {
		setFilterData(
			data.filter((filteredData) => {
				return filteredData.searchField?.toLowerCase().indexOf(search.toLowerCase()) !== -1;
			})
		);
	};
	useEffect(() => {
		fetchData(searchField,returnField);
		changeFilter(searchField);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleClick = (filteredData) => {
		setSelectedData(filteredData.returnField);
		const search = document.getElementById('search');
		search.value = filteredData.searchField;
		setFilterData([]);
	};
	return (
		<div className="form-group">
			<input id="search" autoComplete="off" className="form-control" onChange={handleChange} />
			{filterData.length < 200 ? (
				<ul id="hashtags" className="list-group list-group-flush">
					{filterData.map((filteredData) => (
						<li
							className={`list-group-item ${styles.listItem}`}
							onClick={() => handleClick(filteredData)}
							key={filteredData.returnField}
						>
							{filteredData.searchField}
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
}

export default SearchBar;
