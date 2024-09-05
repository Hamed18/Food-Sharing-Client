import { useContext, useState } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Stack,
  Textarea,
  useDisclosure,
  Button,
  FormLabel
} from '@chakra-ui/react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLoaderData } from 'react-router-dom';
import { format, differenceInHours, differenceInMinutes } from 'date-fns';
import Swal from 'sweetalert2';

const FoodDetailsPage = () => {
  const { user } = useContext(AuthContext);

  const [request,Setrequest] = useState(true);  // toggle request button

  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hooks for managing the drawer
  const [placement] = useState('right'); // Drawer placement
  
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
  console.log(currentTime);
//   const remainingHours = differenceInHours(expiryDate, currentTime);
//   const remainingMinutes = differenceInMinutes(expiryDate, currentTime) % 60;
  
  // Shorten date/time format
  const shortExpiryDateTime = format(expiryDate, 'dd/MM/yyyy HH:mm');

  const handleRequest = (id) => {

    fetch(`https://food-sharing-server-orpin.vercel.app/available/${id}`,{
		method: 'PATCH',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			foodStatus : 'requested',
			requestDate : currentTime
		})
	})
	.then(res => res.json())
	.then(data => {
		console.log(data);
		if (data.modifiedCount > 0){
			Setrequest(false);
      Swal.fire({
				title: "Done!",
				text: "Food Item Requested Successfully",
				icon: "success",
				confirmButtonText: 'OK'
			});
		}

	}) 

	onClose();  // chakra ui modal
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Donor Information */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Donor Information</h2>
        <p className="text-lg"><strong>Donor Name:</strong> {donatorName}</p>
        <p className="text-lg"><strong>Pickup Location:</strong> {pickupLocation}</p>
      </div>

      {/* Food Details */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Food Details</h2>
        <img src={foodImage} alt={foodName} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg mb-2"><strong>Food Name:</strong> {foodName}</p>
        <p className="text-lg mb-2"><strong>Quantity:</strong> {foodQuantity} Persons</p>
        <p className="text-lg mb-2"><strong>Expires on:</strong> {shortExpiryDateTime} </p>

        {/* Request Button */}
        <Button
          onClick={onOpen}
          colorScheme="blue"
          mt={4}
          size="lg"
          variant="solid"
          className="transition duration-200 ease-in-out">
            Request
        </Button>
      </div>

      {/* Drawer Modal */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Request Food</DrawerHeader>

          <DrawerBody overflowY="auto">
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="foodName">Food Name</FormLabel>
                <Input id="foodName" value={foodName} readOnly bg="gray.100" />
              </Box>

              <Box>
                <FormLabel htmlFor="foodId">Food ID</FormLabel>
                <Input id="foodId" value={_id} readOnly bg="gray.100" />
              </Box>

              <Box>
                <FormLabel htmlFor="donatorEmail">Donator Email</FormLabel>
                <Input id="donatorEmail" value={donatorEmail} readOnly bg="gray.100" />
              </Box>

              <Box>
                <FormLabel htmlFor="donatorName">Donator Name</FormLabel>
                <Input id="donatorName" value={donatorName} readOnly bg="gray.100" />
              </Box>

              <Box>
                <FormLabel htmlFor="userEmail">User Email</FormLabel>
                {/* <Input id="userEmail" value={user.email} readOnly bg="gray.100" /> */}
              </Box>

              <Box>
                <FormLabel htmlFor="requestDate">Request Date</FormLabel>
                <Input id="requestDate" value={shortExpiryDateTime} readOnly bg="gray.100" />
              </Box>

              <Box>
                <FormLabel htmlFor="pickupLocation">Pickup Location</FormLabel>
                <Input id="pickupLocation" value={pickupLocation} readOnly bg="gray.100" />
              </Box>

              <Box>
                <FormLabel htmlFor="expireDate">Expire Date</FormLabel>
                <Input id="expireDate" value={shortExpiryDateTime} readOnly bg="gray.100" />
              </Box>

              <Box>
                <FormLabel htmlFor="additionalNotes">Additional Notes</FormLabel>
                <Textarea id="additionalNotes" bg="gray.100" placeholder="why are you requesting for this food?"/>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>

			{/* if user click request button, redirct to availabel page */}
			<Link to = '/availableFoods'>
			  <Button colorScheme="blue" onClick={()=> handleRequest(_id)}>
                {request===true ? 'Request' : 'Requested'}
              </Button>
			</Link>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default FoodDetailsPage;
