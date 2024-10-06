import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const ShowReward = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [badge, setBadge] = useState("");

  useEffect(() => {
    if (user.email) {
      // Fetch single user data
      fetch(`http://localhost:3000/AllUsers/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);

          // Determine badge based on points
          const points = data.points;
          let badge = "";
          if (points === 0) badge = "You haven't earn a badge yet!";
          if (points > 0 && points < 50) badge = "The Changemaker";
          else if (points >= 50 && points < 100) badge = "The Community Hero";
          else if (points >= 100) badge = "The Philanthropist";
          setBadge(badge);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }
  }, [user.email]);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (!userData) {
    return <div>User not found</div>;
  }

  return (
    <div className="bg-green-500 rounded-xl py-4 text-white mt-8">
      {userData?.points ? (
        <div>
          <h3 className="text-center text-3xl py-2 font-bold">Congratulations!</h3>
        </div>
      ) : (
        <div>
          <p className="text-center py-2">
            You haven't added or requested any food items!
          </p>
        </div>
      )}
      <h3 className="text-center text-3xl py-2">
        Your total Reward Points: {userData?.points || 0}
      </h3>
      <h3 className="text-center text-3xl py-2 font-bold">Badge: {badge}</h3>
    </div>
  );
};

export default ShowReward;
