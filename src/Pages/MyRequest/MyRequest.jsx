import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyRequest = () => {
	const {user} = useContext(AuthContext);
	const url = `http://localhost:3000/availablebyEmail/${user.email}`;
	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then((data) => {
			console.log('sucess in query',data);
		})
		.catch(err => console.log('error using query', err));
	} ,[])

	return (
		<div>
			
		</div>
	);
};

export default MyRequest;


//	fetch(`http://localhost:3000/available?donatorEmail=${user.email}&foodStatus={requested}`);
