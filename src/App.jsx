import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddStudent from "./components/AddStudent";
import SearchItem from "./components/SearchItem";
import StudentList from "./components/StudentList";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import Dropdown from "./components/Dropdown";

function App() {
	const [list, setList] = useState([]);
	const [btnText, setBtnText] = useState("ADD");
	const [editID, setEditID] = useState(null);

	const [isLoading, setLoader] = useState(true);

	const [search, SetsearchText] = useState("");

	const [currentPage, setCurrentPage] = useState(1);

	const [selectedValue, setselectedValue] = useState(5);

	const itemPerPage = selectedValue;

	const lastIndex = itemPerPage * currentPage;

	const firstIdex = lastIndex - itemPerPage;

	const [FormData, setFormData] = useState({
		username: "",
		email: "",
		phone: "",
	});

	useEffect(() => {
		fetch("https://dummyjson.com/users")
			.then((res) => res.json())
			.then((data) => {
				setList(data.users);
				setLoader(false);
			})
			.catch((err) => {
				console.log(err);
				setLoader(false);
			});
	}, []);

	const handleChangeFiled = (e) => {
		setFormData({ ...FormData, [e.target.name]: e.target.value });
	};

	const handleAdd = (event) => {
		event.preventDefault();

		if (editID) {
			const updateList = list.map((item) =>
				item.id === editID
					? {
							...item,
							username: FormData.username,
							email: FormData.email,
							phone: FormData.phone,
					  }
					: item
			);
			setList(updateList);
		} else {
			setList([
				{
					id: new Date().getTime(),
					username: FormData.username,
					email: FormData.email,
					phone: FormData.phone,
				},
				...list,
			]);
			setFormData({ username: "", email: "", phone: "" });
		}
	};

	const handleDelete = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
	};

	const handleEdit = (id) => {
		const newList = list.find((item) => item.id === id);

		setFormData({
			username: newList.username,
			email: newList.email,
			phone: newList.phone,
		});
		setBtnText("UPDATE");
		setEditID(id);
	};

	const handleSearch = (e) => {
		const searchText = e.target.value;

		SetsearchText(searchText);
	};

	const finalList = list.filter(
		(item) =>
			item.username.toLowerCase().includes(search.toLowerCase()) ||
			item.email.toLowerCase().includes(search.toLowerCase()) ||
			item.phone.toLowerCase().includes(search.toLowerCase())
	);

	const pageData = finalList.slice(firstIdex, lastIndex);

	const handlePagination = (num) => {
		setCurrentPage(num);
	};

	const handleDrop = (e) => {
		setselectedValue(e.target.value);
		console.log("Selected value:", e.target.value);
	};

	return (
		<div className="container-md">
			<AddStudent
				FormData={FormData}
				handleChangeFiled={handleChangeFiled}
				handleAdd={handleAdd}
				btnText={btnText}
			/>
			<hr />
			<SearchItem handleSearch={handleSearch} />
			<hr />
			<Dropdown handleDrop={handleDrop} selectedValue={selectedValue} />

			{isLoading && <Loader />}
			<StudentList
				list={pageData}
				handleDelete={handleDelete}
				handleEdit={handleEdit}
			/>
			<Pagination
				totItem={finalList.length}
				itemPerPage={itemPerPage}
				handlePagination={handlePagination}
			/>
		</div>
	);
}

export default App;
