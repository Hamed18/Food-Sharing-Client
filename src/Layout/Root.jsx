import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Banner from "../Shared/Banner";

const Root = () => {
	return (
		<div className="max-w-6xl mx-auto">
			<Navbar></Navbar>
			<Banner></Banner>
			<Outlet></Outlet>
		</div>
	);
};

export default Root;