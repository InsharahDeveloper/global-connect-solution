import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FeedbackSlider() {
  const [reviews, setReviews] = useState([]);

  const getFeedback = async () => {
    try {
      const res = await fetch(
        "https://sheetdb.io/api/v1/4qgr5knb1i21b"
      );
      const data = await res.json();
      setReviews(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <section className="py-20 px-6 lg:px-16 relative overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-orange-400 font-medium text-sm uppercase tracking-widest">
          What our customers say about us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
          Clients <span className="orange">Feedback</span>
          <span className="absolute left-0 top-0 text-6xl md:text-7xl font-bold text-white/5 -z-10">
            Testimonials
          </span>
        </h2>
      </div>

      {/* Custom Arrows */}
      <button className="custom-prev text-blue absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center">
        <ChevronLeft size={22} />
      </button>

      <button className="custom-next text-blue absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center">
        <ChevronRight size={22} />
      </button>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="pb-14"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`rounded-xl bg-orange-400 p-8 text-center shadow-xl transition-all duration-500 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-40"
                }`}
              >
                {/* Avatar */}
                <div className="w-12 h-12 mx-auto rounded-full bg-white text-blue text-2xl flex items-center justify-center text-xl font-bold mb-4">
                  {item.name?.charAt(0)}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-sm mb-3">
                  Client : {item.service}
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={`${
                        star <= Number(item.rating)
                          ? "fill-[#083055] text-[#083055]"
                          : "text-[#083055]"
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-white text-sm leading-7">
                  {item.feedback}
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FeedbackSlider;