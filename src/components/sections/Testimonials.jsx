import "../../App.css";
import { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../assets/testimonials/13.jpeg";
import img2 from "../../assets/testimonials/2.jpeg";
import img3 from "../../assets/testimonials/3.jpeg";
import img4 from "../../assets/testimonials/4.jpeg";
import img5 from "../../assets/testimonials/5.jpeg";
import img6 from "../../assets/testimonials/6.jpeg";
import img7 from "../../assets/testimonials/7.jpeg";
import img8 from "../../assets/testimonials/8.jpeg";
import img9 from "../../assets/testimonials/9.jpeg";
import img10 from "../../assets/testimonials/10.jpeg";
import img11 from "../../assets/testimonials/11.jpeg";
import img12 from "../../assets/testimonials/12.jpeg";

function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setInit(true);
    }
  }, []);

  const reviews = [
    { id: 1, img: img1, title: "✓ Deal Closed Successfully!", desc: "2 Business GV + 2 Personal GV delivered" },
    { id: 2, img: img2, title: "✓ Deal Closed Successfully!", desc: "Google Voice setup done for Indian client" },
    { id: 3, img: img3, title: "✓ Repeat Client Deal!", desc: "Client bought multiple GV lines" },
    { id: 4, img: img4, title: "✓ Deal Closed Successfully!", desc: "Australia Line setup completed" },
    { id: 5, img: img5, title: "✓ Deal Closed Successfully!", desc: "801 Area Code delivered" },
    { id: 6, img: img6, title: "✓ Repeat Client Deal!", desc: "Ireland GV again delivered" },
    { id: 7, img: img7, title: "✓ Deal Closed Successfully!", desc: "Germany Business Number sold" },
    { id: 8, img: img8, title: "✓ Deal Closed Successfully!", desc: "931 Area Code delivered" },
    { id: 9, img: img9, title: "✓ Deal Closed Successfully!", desc: "Australia setup done" },
    { id: 10, img: img10, title: "✓ Deal Closed Successfully!", desc: "USA Line delivered" },
    { id: 11, img: img11, title: "✓ Repeat Client Deal!", desc: "Ireland GV setup again" },
    { id: 12, img: img12, title: "✓ Deal Closed Successfully!", desc: "USA Line completed" },
  ];

  return (
    <section className="w-full relative py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-orange-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-orange-400/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-[Poppins]">
          Clients <span className="text-orange-400">Proof</span> Gallery
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Trusted by clients worldwide with verified results.
        </p>
      </div>



      {/* Swiper */}
      <Swiper
      className="relative"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={18}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}

        navigation={
          init
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : false
        }

        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}

    breakpoints={{
  0: { slidesPerView: 1 },
  480: { slidesPerView: 1.1 },
  640: { slidesPerView: 1.5 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView:3 },
  1240: { slidesPerView: 4 },
  1500: { slidesPerView: 5 }, // 👈 XL / 2XL screens
}}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-1 t-card shadow-xl group">

<div className="relative overflow-hidden h-[600px] sm:h-[580px] md:h-[600px] lg:h-[550px]">
                <img
                  src={item.img}
                  alt={item.title}
className="w-full h-full object-cover group-hover:scale-110 transition duration-700"                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 active:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-3 sm:px-4">

                  <h3 className="text-white text-base sm:text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm mt-2">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
            {/* Navigation Buttons */}
      

    </section>
  );
}

export default Testimonials;