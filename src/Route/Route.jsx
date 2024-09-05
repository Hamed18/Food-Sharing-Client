import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFoods from "../Pages/AddFoods/AddFoods";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import MyRequest from "../Pages/MyRequest/MyRequest";
import Login from "../Pages/UserAuthentication/Login";
import Register from "../Pages/UserAuthentication/Register";
import AvailableFoodsDetails from "../Pages/AvailableFoods/AvailableFoodsDetails";
import PrivateRoutes from "../Route/PrivateRoutes";
import UpdateMyFood from "../Pages/ManageMyFood/UpdateMyFood";
import HomeCardDetails from "../Pages/Home/HomeCardDetails";
import ErrorPage from "../Route/ErrorPage";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  errorElement: <ErrorPage></ErrorPage>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		//	loader: () => fetch('http://localhost:3000/available')
		},
		{
			path: "/food/:id",
			element: <PrivateRoutes><HomeCardDetails></HomeCardDetails></PrivateRoutes>,
			loader: ({params}) => fetch(`http://localhost:3000/available/${params.id}`) 
		},
		{
			path: "/availableFoods",
			element: <AvailableFoods></AvailableFoods>,
		},
		{
			path: "/availableFoods/:id",
			element: <PrivateRoutes><AvailableFoodsDetails></AvailableFoodsDetails></PrivateRoutes>,
			loader: ({params}) => fetch(`http://localhost:3000/available/${params.id}`) 
		},
		{
			path: "/addFood",
			element: <PrivateRoutes><AddFoods></AddFoods></PrivateRoutes>
		},
		{
			path: "/manageMyFoods",
			element: <PrivateRoutes><ManageMyFood></ManageMyFood></PrivateRoutes>
		},
		{
			path: "/manageMyFoods/:id/:id",
			element: <PrivateRoutes><UpdateMyFood></UpdateMyFood></PrivateRoutes>,
			loader: ({params}) => fetch(`http://localhost:3000/manageFoodByEmail/${params.id}/${params.id}`)
		},
		{
			path: "/myRequest",
			element: <PrivateRoutes><MyRequest></MyRequest></PrivateRoutes>
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