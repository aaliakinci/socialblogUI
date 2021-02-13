import { useState, useEffect } from 'react';
import styles from './styles.module.css';
function SearchBar({ setSelectedData, data, returnValue, searchValue, holder }) {
	const [search, setSearch] = useState('');
	const [filterData, setFilterData] = useState([]);

	const changeFilter = (searchValue, returnValue) => {
		if (filterData.length > 0) {
			if (filterData.length < 2 && search === filterData[0][searchValue]) {
				setSelectedData(filterData[0][returnValue]);
				setFilterData([]);
			}
		}
	}
	const fetchData = async (searchValue) => {
		setFilterData(
			data.filter((filteredData) => {
				return filteredData[searchValue]?.toLowerCase().indexOf(search.toLowerCase()) !== -1;
			})
		);
	};
	useEffect(() => {
		fetchData(searchValue, returnValue);
		changeFilter(searchValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleClick = (filteredData) => {
		setSelectedData(filteredData[returnValue]);
		const search = document.getElementById('search');
		search.value = filteredData[searchValue];
		setFilterData([]);
	};
	return (
		<div className="form-group border-0">
			<input id="search" autoComplete="off" className="form-control" placeholder={holder} onChange={handleChange} />
			{filterData.length < 200 ? (
				<ul id="hashtags" className="list-group list-group-flush">
					{filterData.map((filteredData) => (
						<li
							className={`list-group-item ${styles.listItem}`}
							onClick={() => handleClick(filteredData)}
							key={filteredData[returnValue]}
						>
							{filteredData[searchValue]}
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
