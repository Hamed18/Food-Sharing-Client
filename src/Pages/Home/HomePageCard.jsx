import React from "react";
import { FaMapMarkerAlt, FaClock, FaBox, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { format, differenceInHours, differenceInMinutes } from "date-fns";
// npm install date-fns

const HomePageCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donatorImage,
    donatorName,
    donatorEmail,
    foodStatus,
  } = food;

  // Calculate remaining time
  const expiryDate = new Date(expiredDateTime);
  const currentTime = new Date();
  const remainingHours = differenceInHours(expiryDate, currentTime);
  const remainingMinutes = differenceInMinutes(expiryDate, currentTime) % 60;

  // Shorten date/time format
  const shortExpiryDateTime = format(expiryDate, "dd/MM/yyyy HH:mm");

  return (
    <div className="m-2 rounded-lg shadow-lg sm:w-96 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Food Image as Header */}
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-56 object-cover"
        />
        {/* Food Name as Overlay */}
        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
          <h3 className="text-2xl font-bold text-white">{foodName}</h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-6">
        {/* Donator Section */}
        <div className="flex items-center space-x-4">
          <img
            src={donatorImage}
            alt="User Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
          />
          <div>
            <h4 className="font-semibold">{donatorName}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {donatorEmail}
            </p>
          </div>
        </div>

        {/* Food Details */}
        <div className="space-y-3">
          <span className="text-gray-600 dark:text-gray-400 flex items-center">
            <FaClock className="text-yellow-500 mr-2" />
            Expires on {shortExpiryDateTime} <br />
            {remainingHours > 0 || remainingMinutes > 0
              ? `${
                  remainingHours > 0
                    ? `${remainingHours} hour${remainingHours > 1 ? "s" : ""}`
                    : ""
                } ${remainingMinutes} minute${
                  remainingMinutes !== 1 ? "s" : ""
                } left`
              : "Already Expired"}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400 flex items-center">
              <FaMapMarkerAlt className="text-green-500 mr-2" />
              Location: {pickupLocation}
            </span>
          </div>
          <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
            <span className="flex items-center">
              <FaBox className="text-blue-500 mr-2" />
              Quantity: {foodQuantity} Persons
            </span>
            <span className="flex items-center">
              <FaCheckCircle
                className={`${
                  foodStatus === "available" ? "text-green-500" : "text-red-500"
                } mr-2`}
              />
              {foodStatus}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-6">
          <Link to={`/food/${_id}`}>
            <button className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
