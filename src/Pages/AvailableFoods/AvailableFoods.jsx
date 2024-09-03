import { useLoaderData } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";

const AvailableFoods = () => {
  const AvailableFoods = useLoaderData();
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
