const AddStudent = ({ FormData, handleChangeFiled, handleAdd, btnText }) => {
	return (
		<>
			<h3 style={{ textAlign: "center", paddingTop: "5px" }}>Add Student</h3>
			<form className="row gy-2 gx-3 align-items-center" onSubmit={handleAdd}>
				<div className="col-auto">
					<label className="visually-hidden" htmlFor="autoSizingInput">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						name="username"
						id="autoSizingInput"
						placeholder="Enter Name"
						value={FormData.username}
						onChange={handleChangeFiled}
					/>
				</div>

				<div className="col-auto">
					<label className="visually-hidden" htmlFor="autoSizingInput">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						name="email"
						id="autoSizingInput"
						placeholder="Enter Email"
						value={FormData.email}
						onChange={handleChangeFiled}
					/>
				</div>

				<div className="col-auto">
					<label className="visually-hidden" htmlFor="autoSizingInput">
						Phone
					</label>
					<input
						type="tel"
						className="form-control"
						id="autoSizingInput"
						name="phone"
						placeholder="Enter Phone number"
						value={FormData.phone}
						onChange={handleChangeFiled}
					/>
				</div>

				<div className="col-auto">
					<button type="submit" className="btn btn-primary">
						{btnText}
					</button>
				</div>
			</form>
		</>
	);
};

export default AddStudent;
