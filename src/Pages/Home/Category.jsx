// Import Swiper styles and necessary modules
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

// Import images
import slide1 from '../../../src/assets/kacchi.jpeg';
import slide2 from '../../../src/assets/pencake2.jpeg';
import slide3 from '../../../src/assets/rice1.jpeg';
import slide4 from '../../../src/assets/kacchi.jpeg';
import slide5 from '../../../src/assets/kacchi.jpeg';

const Category = () => {
	return (
		<Swiper
			// Responsive breakpoints for mobile, tablet, and desktop
			breakpoints={{
				640: {
					slidesPerView: 1, // 1 slide for screens >= 640px (mobile)
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2, // 2 slides for screens >= 768px (tablet)
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 4, // 4 slides for screens >= 1024px (desktop)
					spaceBetween: 40,
				},
			}}
            autoplay={{
                delay: 3000, // Set delay for auto-rotation (3 seconds)
                disableOnInteraction: false, // Keeps autoplay even after interaction
            }}
            pagination={{
                clickable: true, // Make pagination dots clickable
            }}
            modules={[Pagination, Autoplay]} // Import Pagination and Autoplay modules
            className="mySwiper mb-24"
        >
            <SwiperSlide>
				<div className="relative bg-black/50 rounded-lg overflow-hidden shadow-lg h-60 md:h-72 lg:h-80 w-full">
					<img src={slide1} alt="Salads" className="object-cover w-full h-full opacity-70" />
					<h3 className="absolute inset-x-0 bottom-4 text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center text-white">
						Kacchi
					</h3>
				</div>
            </SwiperSlide>
            <SwiperSlide>
				<div className="relative bg-black/50 rounded-lg overflow-hidden shadow-lg h-60 md:h-72 lg:h-80 w-full">
					<img src={slide2} alt="Pizzas" className="object-cover w-full h-full opacity-70" />
					<h3 className="absolute inset-x-0 bottom-4 text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center text-white">
						Pencake
					</h3>
				</div>
            </SwiperSlide>
            <SwiperSlide>
				<div className="relative bg-black/50 rounded-lg overflow-hidden shadow-lg h-60 md:h-72 lg:h-80 w-full">
					<img src={slide3} alt="Soups" className="object-cover w-full h-full opacity-70" />
					<h3 className="absolute inset-x-0 bottom-4 text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center text-white">
						Fried Rice
					</h3>
				</div>
            </SwiperSlide>
            <SwiperSlide>
				<div className="relative bg-black/50 rounded-lg overflow-hidden shadow-lg h-60 md:h-72 lg:h-80 w-full">
					<img src={slide4} alt="Desserts" className="object-cover w-full h-full opacity-70" />
					<h3 className="absolute inset-x-0 bottom-4 text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center text-white">
						Dhakaiya Kacchi
					</h3>
				</div>
            </SwiperSlide>
            <SwiperSlide>
				<div className="relative bg-black/50 rounded-lg overflow-hidden shadow-lg h-60 md:h-72 lg:h-80 w-full">
					<img src={slide5} alt="Salads" className="object-cover w-full h-full opacity-70" />
					<h3 className="absolute inset-x-0 bottom-4 text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-center text-white">
						Mezban
					</h3>
				</div>
            </SwiperSlide>
        </Swiper>
	);
};

export default Category;
