import { useContext,useState,useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const ManageMyFood = () => {
	const {user} = useContext(AuthContext);
	const [ManageMyFood,setManageMyFood] = useState([]);

	const url = `http://localhost:3000/manageFoodByEmail/${user.email}`;
	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then((data) => {
			console.log('sucess in query',data);
			const remaining = data.filter(obj => obj.foodStatus === 'available');  
			setManageMyFood(remaining);
			console.log(ManageMyFood);
		})
		.catch(err => console.log('error using query', err));
	} ,[user.email])

	return (
		<div>
			<h3 className="text-center mt-8 mb-4">{ManageMyFood.length}</h3>
		</div>
	);
};

export default ManageMyFood;