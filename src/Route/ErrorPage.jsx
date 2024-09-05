import { Link } from "react-router-dom";
import img from "../../src/assets/error_page2.png";
const ErrorPage = () => {
	return (
		<div className="my-12 md:my-24">
		  <div className="flex items-center justify-center">
		      <img src={img} alt="" className="flex items-center justify-center w-[400px] h-[300px]"/>
		  </div>
          <div className="text-center my-4">
			<button>
			   <Link to="/" className="btn btn-outline btn-error text-center font-bold p-2 rounded-xl flex justify-center">Go Back Home</Link>
			</button>
		  </div>
		</div>
	);
};

export default ErrorPage;