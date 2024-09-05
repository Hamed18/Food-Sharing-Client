import React from "react";
import { FaClock } from "react-icons/fa";

const MyRequestCard = ({ req }) => {
  const { _id, donatorName, pickupLocation, expiredDateTime, foodStatus } = req;
  return (
    <div className="m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-gray-800 dark:text-gray-200">
      <div className="p-6">
        {/* Donator Info */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src="/path-to-donator-image.jpg"
              alt="Donator"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black dark:text-gray-100">
              {donatorName}
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Pickup at {pickupLocation}
            </p>
          </div>
        </div>

        {/* Expiry Info */}
        <div className="mt-4">
          <span className="text-gray-600 dark:text-gray-400 flex items-center">
            <FaClock className="text-yellow-500 mr-2" />
            Expires on {expiredDateTime}
          </span>
        </div>

        {/* Status */}
        <div className="mt-4">
          <span
            className={`inline-block px-3 py-1 font-semibold ${
              foodStatus === "available" ? "text-green-600" : "text-red-600"
            } bg-${
              foodStatus === "available" ? "green" : "red"
            }-200 rounded-full`}
          >
            {foodStatus.charAt(0).toUpperCase() + foodStatus.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyRequestCard;
