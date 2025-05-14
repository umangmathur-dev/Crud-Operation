import React from "react";

const Pagination = ({ totItem, itemPerPage, handlePagination }) => {
	const TotalPageItems = Math.ceil(totItem / itemPerPage);

	const finalPage = Array.from({ length: TotalPageItems }, (_, i) => i + 1);

	if (totItem === 1) return false;

	//console.log(finalPage)

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				<li className="page-item disabled">
					<a className="page-link">Previous</a>
				</li>
				{finalPage.map((num) => (
					<li className="page-item" key={num}>
						<a className="page-link" href="#" onClick={() => handlePagination(num)}>
							{num}
						</a>
					</li>
				))}

				<li className="page-item">
					<a className="page-link" href="#">
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
