import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFoods from "../Pages/AddFoods/AddFoods";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import MyRequest from "../Pages/MyRequest/MyRequest";
import Login from "../Pages/UserAuthentication/Login";
import Register from "../Pages/UserAuthentication/Register";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/availableFoods",
			element: <AvailableFoods></AvailableFoods>
		},
		{
			path: "/addFood",
			element: <AddFoods></AddFoods>
		},
		{
			path: "/manageMyFoods",
			element: <ManageMyFood></ManageMyFood>
		},
		{
			path: "/myRequest",
			element: <MyRequest></MyRequest>
		},
		{
			path: "/login",
			element: <Login></Login>
		},
		{
			path: "/register",
			element: <Register></Register>
		}
	  ]
	},
  ]);

export default routes;