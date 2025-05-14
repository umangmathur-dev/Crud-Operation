import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
	const [list, setList] = useState([]);
	const [FormData, setFormData] = useState({
		username: "",
		email: "",
		phone: "",
	});
	const [btnText, setBtnText] = useState("ADD");
	const [editID, setEditID] = useState(null);

	const [isLoading, setLoader] = useState(true);

	const [search, SetsearchText] = useState("");

	const value = {
		list,
		setList,
		FormData,
		setFormData,
		btnText,
		setBtnText,
		editID,
		setEditID,
		isLoading,
		setLoader,
		search,
		SetsearchText,
	};

	return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyProvider;
