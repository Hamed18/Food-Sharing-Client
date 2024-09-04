import React from 'react';
import { FaMapMarkerAlt, FaClock, FaBox, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format, differenceInHours, differenceInMinutes } from 'date-fns';
// npm install date-fns

const AvailableFoodsCard = ({ AvailableFoods }) => {
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
  } = AvailableFoods;

  // Calculate remaining time
  const expiryDate = new Date(expiredDateTime);
  const currentTime = new Date();
  const remainingHours = differenceInHours(expiryDate, currentTime);
  const remainingMinutes = differenceInMinutes(expiryDate, currentTime) % 60;

  // Shorten date/time format
  const shortExpiryDateTime = format(expiryDate, 'dd/MM/yyyy HH:mm');

  return (
    <div className="rounded-lg shadow-lg sm:w-96 dark:bg-gray-800 dark:text-gray-200 p-4 m-4 transform hover:scale-105 transition-transform duration-200 ease-in-out">
      {/*User profile*/}
      <div className="flex items-center p-3 space-x-4 bg-gray-200 dark:bg-gray-700 rounded-t-lg">
        <img src={donatorImage} alt="User Profile"
          className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
        />
        <div>
          <h2 className="text-lg font-semibold leading-none">{donatorName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{donatorEmail}</p>
        </div>
      </div>

      {/*Food image*/}
      <img
        src={foodImage} alt={foodName}
        className="object-cover object-center w-full h-64 rounded-lg shadow-md dark:bg-gray-500 mt-4"
      />

      <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-b-lg mt-4">
        {/*Food details*/}
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {foodName}
        </h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="mr-2 text-xl text-green-500" />
            <span className="font-medium">Location: {pickupLocation}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaClock className="mr-2 text-xl text-yellow-500" />
            <span className="font-medium">
              Expires on: {shortExpiryDateTime} <br /> ({remainingHours>0 ? `${remainingHours} h ` : ''}{remainingMinutes} m left)
            </span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaBox className="mr-2 text-xl text-blue-500" />
            <span className="font-medium">Quantity: {foodQuantity} Persons</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCheckCircle className={`mr-2 text-xl ${foodStatus==='available'? 'text-green-500':'text-red-500'}`} />
            <span className="font-medium">Availability: {foodStatus}</span>
          </div>
        </div>

        {/*View Details button*/}
        <div className="flex justify-center">
          <Link to={`/availableFoods/${_id}`}>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-200 ease-in-out">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AvailableFoodsCard;
