import { useLoaderData } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { useEffect, useState } from "react";

const AvailableFoods = () => {
  const [AvailableFoods,setAvailableFoods] = useState([]);

  useEffect(() => {
	fetch('http://localhost:3000/available')
	.then(res => res.json())
	.then((data) => {
		// instead of props-dealing from child to parent, use this trick to filter available foods.
		const remaining = data.filter(obj => obj.foodStatus === 'available');  
		setAvailableFoods(remaining);
	})
	.catch(error => 
		console.log('error in loading available foods', error));  
  }, [])

  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {
	   AvailableFoods.map((AvailableFoods) => (
        <AvailableFoodsCard
          key={AvailableFoods._id}
          AvailableFoods={AvailableFoods}
        ></AvailableFoodsCard>
      ))
	  }
    </div>
  );
};

export default AvailableFoods;
