import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/FoodLogo.png";
import { useContext } from "react";
import { AuthContext } from "../../src/Providers/AuthProviders";
import userdefaultPic from "../../src/assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Handle successful sign-out
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableFoods">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addFood">Add Food</NavLink>
      </li>
      <li>
        <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
      </li>
      <li>
        <NavLink to="/myRequest">My Request</NavLink>
      </li>
      <li>
        <NavLink to="/social">Rewards</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Dropdown for mobile view */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/" className="flex items-center btn btn-ghost text-2xl font-bold">
            <img src={logo} alt="ReeFood Logo" className="w-8 h-8 mr-1" />
            <span className="text-green-300">Ree</span>
            <span className="text-green-600 font-bold ml-[-9px]">Food</span>
          </Link>
        </div>

        {/* Nav Links for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* User Section */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              {user.photoURL ? (
                <div
                  className="w-10 rounded-full tooltip tooltip-left"
                  data-tip={user.displayName || "User"}
                >
                  <img
                    alt="User profile"
                    src={user.photoURL}
                    className="rounded-full mr-2"
                  />
                </div>
              ) : (
                <img
                  alt="Default user"
                  src={userdefaultPic}
                  className="w-10 h-10 rounded-full mr-2"
                />
              )}
              <button onClick={handleSignOut} className="btn btn-primary">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
