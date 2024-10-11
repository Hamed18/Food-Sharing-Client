import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Banner from "../Shared/Banner";
import Footer from "../Shared/Footer";

const Root = () => {
	return (
		<div className="">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Root;