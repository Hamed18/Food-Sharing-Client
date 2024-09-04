const ManageMyFoodCard = ({ manageFood, handleDelete, handleUpdate }) => {
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
  } = manageFood;

  return (
    <tr className="bg-white hover:bg-gray-50 transition-colors duration-200">
      <th className="p-4">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline text-red-500 hover:bg-red-500 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td className="p-4">
        <div className="avatar">
          <div className="rounded-lg w-24 h-24">
            {foodImage ? (
              <img src={foodImage} alt={foodName} className="object-cover" />
            ) : (
              <div className="bg-gray-200 w-24 h-24 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
        </div>
      </td>
      <td className="p-4 font-medium text-gray-800">{foodName}</td>
      <td className="p-4 text-gray-600">{foodQuantity}</td>
      <td className="p-4 text-gray-600">{pickupLocation}</td>
      <th className="p-4">
        <button className="btn btn-ghost btn-xs text-blue-500 hover:underline">
          Update
        </button>
      </th>
    </tr>
  );
};

export default ManageMyFoodCard;
