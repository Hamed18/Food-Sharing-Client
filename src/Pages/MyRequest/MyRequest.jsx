import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyRequestCard from "./MyRequestCard";

const MyRequest = () => {
	const {user} = useContext(AuthContext);
	const [MyRequest,setMyrequest] = useState([]);
	const url = `http://localhost:3000/availablebyEmail/${user.email}`;
	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then((data) => {
			console.log('sucess in query',data);
			const remaining = data.filter(obj => obj.foodStatus === 'requested');  
			setMyrequest(remaining);
			console.log(MyRequest);
		})
		.catch(err => console.log('error using query', err));
	} ,[user.email])

	return (
		<div>
			<h3 className="text-center mt-8 mb-4">Your Requested Food Item is {MyRequest.length}</h3>
		{
			MyRequest.map(req => 
				<MyRequestCard
				  key = {req._id}
				  req = {req}
				></MyRequestCard>
			)
		}
	    </div>
	);
};

export default MyRequest;


//	fetch(`http://localhost:3000/available?donatorEmail=${user.email}&foodStatus={requested}`);
