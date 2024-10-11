import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader for carousel
import { Carousel } from 'react-responsive-carousel';

import a from "../../src/assets/banner1.jpeg";
import b from "../../src/assets/banner2.jpeg";
import c from "../../src/assets/banner3.jpeg";
import d from "../../src/assets/banner4.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  const banners = [
    {
      image: a,
      title: "Share a Meal, Spread the Love",
      subtitle: "Donate your surplus food and help fight hunger in your community",
    },
    {
      image: b,
      title: "Food for All, Together We Thrive",
      subtitle: "Connect with others to share and receive food, reducing waste and feeding those in need",
    },
    {
      image: c,
      title: "Reduce Waste, Feed Hope",
      subtitle: "Join our mission to minimize food waste by sharing what you have with those who need it most.",
    },
    {
      image: d,
      title: "Give Food, Get Gratitude",
      subtitle: "Every donation makes a difference—share your extra food today and make someone’s day brighter",
    },
  ];

  return (
    <div className="pt-[80px]"> 
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            {/* Banner Image */}
            <img src={banner.image} alt={`banner-${index + 1}`} className="h-[80vh] w-full object-cover" />

            {/* Banner Text (Title and Subtitle) */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{banner.title}</h2>
              <p className="text-lg md:text-2xl text-gray-300">{banner.subtitle}</p>
              <Link to="/availableFoods">
                <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
