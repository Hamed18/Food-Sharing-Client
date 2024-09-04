import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({children}) => {
	const {user,loading} = useContext(AuthContext);
	if (loading){
		// console.log("loading happens");
		return <progress className="progress w-56"></progress>
	}

	if(user?.email){
        return children;
    }

	return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoutes;