const Dropdown = ({ handleDrop, selectedValue }) => {
	return (
		<div>
			<select
				className="form-select"
				style={{ width: "20%" }}
				aria-label="Select items per page"
				value={selectedValue}
				onChange={(e) => handleDrop(e)}
			>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="15">15</option>
				<option value="20">20</option>
				<option value="25">25</option>
				<option value="30">30</option>
			</select>
		</div>
	);
};

export default Dropdown;
