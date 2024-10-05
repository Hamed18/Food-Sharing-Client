import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;
    const foodName = form.foodName.value.trim().toLowerCase(); // Easy for search
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDateTime = new Date(form.expiredDateTime.value); // Suitable for sorting
    const additionalNotes = form.additionalNotes.value;
    const donatorImage = user?.photoURL ? user.photoURL : form.foodImage.value;
    const donatorName = user?.displayName ? user.displayName : form.foodName.value;
    const donatorEmail = user?.email ? user.email : "unknown";
    const foodStatus = "available";

    const newFood = {
      foodName,
      foodImage,
      foodQuantity: parseInt(foodQuantity, 10),
      pickupLocation,
      expiredDateTime,
      additionalNotes,
      donatorImage,
      donatorName,
      donatorEmail,
      foodStatus,
    };
    console.log("New Food Data:", newFood);

  //  create
    fetch("http://localhost:3000/addFoods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // sweet alert
        if (data.insertedId) {
          Swal.fire({
            title: "Gratitude!",
            text: "Food Items Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });

  };

  return (
    <div className="">
      <div className="mt-8 mb-4 ">
        <h1 className="text-center mt-4 font-bold">Join Us</h1>
        <p className="text-center mb-8">
          Connect with others to share and receive food, reducing waste and
          feeding those in need
        </p>
      </div>

      <section className="p-6 bg-gray-100 dark:bg-gray-900">
        <form
          onSubmit={handleAddFood}
          className="container flex flex-col mx-auto space-y-12"
        >
          {/* Donator Information */}
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                Donator Information
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Details about the donator.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="donatorImage"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Donator Image
                </label>
                <img
                  src={user.photoURL}
                  alt="Donator"
                  className="rounded-full h-20 w-20"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="donatorName"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Donator Name
                </label>
                <input
                  id="donatorName"
                  type="text"
                  //   {
                  // 	user.displayName? defaultValue={user.displayName}: null
                  //   }
                  defaultValue={user.displayName}
                  readOnly
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="donatorEmail"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Donator Email
                </label>
                <input
                  id="donatorEmail"
                  type="email"
                  defaultValue={user.email}
                  readOnly
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                />
              </div>
            </div>
          </fieldset>

          {/* Food Information */}
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                Food Information
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Provide details about the food you want to donate.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="foodName"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Food Name
                </label>
                <input
                  id="foodName"
                  type="text"
                  placeholder="Food Name"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="foodImage"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Food Image URL
                </label>
                <input
                  id="foodImage"
                  type="text"
                  placeholder="Food Image URL"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="foodQuantity"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Food Quantity
                </label>
                <input
                  id="foodQuantity"
                  type="number"
                  placeholder="Food Quantity"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="pickupLocation"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Pickup Location
                </label>
                <input
                  id="pickupLocation"
                  type="text"
                  placeholder="Pickup Location"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="expiredDateTime"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Expired Date/Time
                </label>
                <input
                  id="expiredDateTime"
                  type="datetime-local"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="additionalNotes"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  placeholder="Any additional information"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                ></textarea>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md"
                >
                  Add Food
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddFood;