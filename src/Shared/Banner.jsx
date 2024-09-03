import { Link } from "react-router-dom";
import a from "../../src/assets/a.jpeg";
import s from "../../src/assets/s.jpeg";
import b from "../../src/assets/b.jpeg";
import c from "../../src/assets/c.jpeg";
const Banner = () => {
    const title1 = "Share a Meal, Spread the Love";
	const subtitle1 = "Donate your surplus food and help fight hunger in your community";
    const title2 = "Food for All, Together We Thrive";
	const subtitle2 = "Connect with others to share and receive food, reducing waste and feeding those in need";
    const title3 = "Reduce Waste, Feed Hope";
	const subtitle3 = "Join our mission to minimize food waste by sharing what you have with those who need it most.";
    const title4 = "Give Food, Get Gratitude";
	const subtitle4 = "Every donation makes a difference—share your extra food today and make someone’s day brighter";
  
	return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={a} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title1}</h2>
                        <p>{subtitle1}</p>
                        <div>
                            <Link to='/allspots'>
                               <button className="btn btn-primary mr-5">Discover More</button>
                            </Link>
                            <Link to='/mylist'>
                               <button className="btn btn-outline btn-secondary">Your List</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={b} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title2}</h2>
                        <p>{subtitle2}</p>
                        <div>
                            <Link to='/addFood'>
                               <button className="btn btn-primary mr-5">Donate</button>
                            </Link>
                            <Link to='/availableFoods'>
                               <button className="btn btn-outline btn-secondary">Available Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={c} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title3}</h2>
                        <p>{subtitle3}</p>
                        <div>
                            <Link to='/addFood'>
                               <button className="btn btn-primary mr-5">Donate</button>
                            </Link>
                            <Link to='/availableFoods'>
                               <button className="btn btn-outline btn-secondary">Available Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={s} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title4}</h2>
                        <p>{subtitle4}</p>
                        <div>
                            <Link to='/addFood'>
                               <button className="btn btn-primary mr-5">Donate</button>
                            </Link>
                            <Link to='/availableFoods'>
                               <button className="btn btn-outline btn-secondary">Available Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
	);
};

export default Banner;