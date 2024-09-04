import { useLoaderData } from "react-router-dom";

const UpdateMyFood = () => {
	const {_id} = useLoaderData();
	return (
		<div>
			<h3 className="text-center">{_id}</h3>
		</div>
	);
};

export default UpdateMyFood;