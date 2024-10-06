import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signIn } = useContext(AuthContext);

  // auth redirect
  const location = useLocation();
  console.log("location in the register page", location);
  const navigate = useNavigate();

  // Password Verification and Toggle Password
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget); // will render whole form's html structure
    const form = new FormData(e.currentTarget); // will render form data
    console.log(form);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // Verify Password
    setRegisterError(""); // reset variable registerError
    setSuccess("");
    if (password.length < 6) {
      setRegisterError("Password should be atleast 6 characters or longer");
      return; // remember to return
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Password should contain atleast one uppercase character"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Password should contain atleast one lowercase character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");

        // users api
        const newUser = {
          email: result.user.email,
          role: "user",
          points: 0,
          badges: [],
        };
        console.log("user data", newUser);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error: ", error);
          });

        // redirect
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-3xl my-10 text-center font-bold">Please Register</h2>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="Photo"
            placeholder="Photo URl"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          {/* toggle show password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
            <span
              className="absolute top-4 right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div>
          {registerError && <p className="text-red-700">{registerError}</p>}
          {success && <p className="text-green-700">{success}</p>}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Already have an account?
        <Link className="text-blue-600 font-bold ml-1" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
