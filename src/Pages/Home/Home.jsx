import { useEffect, useState } from "react";
import Banner from "../../Shared/Banner";
import Navbar from "../../Shared/Navbar";
import HomePageCard from "./HomePageCard";
import { Link } from "react-router-dom";

const Home = () => {
	const [foods,setFoods] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3000/available')
		.then(res => res.json())
		.then((data) => {
			console.log(data);
			setFoods(data);
		})
	},[foods])

	return (
		<div>
			<Banner></Banner>
			{/* About Us Section */}
			<div className="mt-8 mb-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{
                   foods.map((food) =>
				   <HomePageCard
				     key = {food._id}
					 food = {food}
				   ></HomePageCard>
				)
				}
			</div>
			<div className="flex justify-center items-center">
				<Link to='/availableFoods'>
				  <button type="button" class="btn btn-outline-secondary">Show All</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;