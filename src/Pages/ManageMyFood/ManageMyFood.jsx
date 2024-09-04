import { useContext,useState,useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ManageMyFoodCard from "./ManageMyFoodCard";

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

	// Delete API
	const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:3000/available/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        alert('deleted successful');
                        const remaining = ManageMyFood.filter(manageFood => manageFood._id !== id);
                        setManageMyFood(remaining);
                    }
                })
        }
    }

	const handleUpdate = id => {

	}

	return (
		<div className="w-full px-4 py-6">
		<h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
		  Manage My Food
		</h2>
		<div className="overflow-x-auto">
		  <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
			<thead className="bg-gray-100">
			  <tr className="text-left text-sm uppercase text-gray-600">
				<th className="p-4">
				  <label>
					<input type="checkbox" className="checkbox" />
				  </label>
				</th>
				<th className="p-4">Image</th>
				<th className="p-4">Food Name</th>
				<th className="p-4">Quantity</th>
				<th className="p-4">Location</th>
				<th className="p-4">Status</th>
			  </tr>
			</thead>
			<tbody>
			  {ManageMyFood.map((manageFood) => (
				<ManageMyFoodCard
				  key={manageFood._id}
				  manageFood={manageFood}
				  handleDelete={handleDelete}
				  handleUpdate={handleUpdate}
				/>
			  ))}
			</tbody>
		  </table>
		</div>
	  </div>	  
	);
};

export default ManageMyFood;






