import { useEffect, useState } from "react";
import Banner from "../../Shared/Banner";
import Navbar from "../../Shared/Navbar";
import HomePageCard from "./HomePageCard";
import { Link } from "react-router-dom";
import Category from "./Category";

const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/available")
      .then((res) => res.json())
      .then((data) => {
     //   console.log(data);
        setFoods(data);
      });
  }, [foods]);

  return (
    <div>
      <Banner></Banner>
      {/* About Us Section */}
      <div className=" ">
        <h1 className="text-center mt-12 font-bold text-3xl mb-2">We're for social causes</h1>
        <p className="text-center">
          "Hunger is not a problem. It is an obscenity. How wonderful it is that
          nobody need wait a single moment before starting to improve the
          world". – Anne Frank
        </p>
        <p className="text-center mb-12">
          No Food Waste is an organisation which aims to redistribute excess
          food from weddings, parties, events to those who are hungry. The idea
          took root in Coimbatore, where we started with 2 Shopper Bags and a
          volunteer to collect the surplus food and deliver to the homeless
          through Public Transportation System from October 16th, 2014. We took
          an oath on that day to stop food waste and satisfy the hunger of many,
          in a quest to make the “World Hunger Free.” 
        </p>
      </div>

	  <div>
      <h1 className="mb-4 text-3xl text-center font-bold">Foods Category</h1>
      <Category></Category>
    </div>

	  <h1 className="mb-4 text-3xl text-center font-bold">Featured Foods</h1>
      <div className="mt-8 mb-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <HomePageCard key={food._id} food={food}></HomePageCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/availableFoods">
          <button type="button" class="btn btn-outline-secondary">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
