import { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import { AuthContext } from "../../Providers/AuthProviders";

const HomeCardDetails = () => {
  const { user } = useContext(AuthContext);

  const [request, setRequest] = useState(true); // toggle request button

  const {
    _id,
    foodName,
    foodImage,
    foodStatus,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donatorName,
    donatorEmail,
  } = useLoaderData();

  // Calculate remaining time using js date-fns library
  const expiryDate = new Date(expiredDateTime);
  const currentTime = new Date();

  // Shorten date/time format
  const shortExpiryDateTime = format(expiryDate, "dd/MM/yyyy HH:mm");

  const handleRequest = (id) => {
    fetch(`http://localhost:3000/available/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        foodStatus: "requested",
        requestDate: currentTime,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setRequest(false);
        }
      });
  };

  return (
	<div className="max-w-4xl mx-auto p-6">
	{/* Donor Information */}
	<div className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 mb-6">
	  <h2 className="text-2xl font-semibold mb-4">Donor Information</h2>
	  <p className="text-lg">
		<strong>Donor Name:</strong> {donatorName}
	  </p>
	  <p className="text-lg">
		<strong>Donator Email:</strong> {donatorEmail}
	  </p>
	  <p className="text-lg">
		<strong>Pickup Location:</strong> {pickupLocation}
	  </p>
	</div>

	{/* Food Details */}
	<div className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
	  <h2 className="text-2xl font-semibold mb-4">Food Details</h2>
	  <img
		src={foodImage}
		alt={foodName}
		className="w-full h-64 object-cover rounded-lg mb-4"
	  />
	  <p className="text-lg mb-2">
		<strong>Food Name:</strong> {foodName}
	  </p>
	  <p className="text-lg mb-2">
		<strong>Quantity:</strong> {foodQuantity} Persons
	  </p>
	  <p className="text-lg mb-2">
		<strong>Food Status:</strong> {foodStatus}
	  </p>
	  <p className="text-lg mb-2">
		<strong>Expires on:</strong> {shortExpiryDateTime}
	  </p>
	  <p className="text-lg mb-2">
		<strong>Additional Notes:</strong> {additionalNotes || 'None'}
	  </p>

	  {/* Request Button */}
	  <Link to='/'>
	    <Button className="btn btn-outline btn-primary">
		  Back
	    </Button>
	  </Link>
	</div>
  </div>

  );
};

export default HomeCardDetails;
