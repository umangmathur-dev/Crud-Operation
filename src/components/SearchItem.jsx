import React from "react";

const SearchItem = ({handleSearch}) => {
	return (
		<div>
			<div className="mb-3">
				<input
					type="search"
					className="form-control"
					id="exampleFormControlInput1"
                    name="search"
					placeholder="Search Item....."
                    onChange={handleSearch}
				/>
			</div>
		</div>
	);
};

export default SearchItem;
