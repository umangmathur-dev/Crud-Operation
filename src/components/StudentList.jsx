import React from "react";

const StudentList = ({ list, handleDelete,handleEdit }) => {

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody> 
					{list.map((user) => (
						<tr key={user.id}>
							<th scope="row">{user.id}</th>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
							<td>
								<button
									className="btn btn-primary"
									type="button"
									onClick={() => handleEdit(user.id)}
								>
									Edit
								</button>
								<button
									className="btn btn-danger mx-2"
									type="button"
									onClick={() => handleDelete(user.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StudentList;
