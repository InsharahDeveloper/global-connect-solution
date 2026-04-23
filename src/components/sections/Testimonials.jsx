import "../../App.css";
import img1 from "../../assets/testimonials/1.jpeg";
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
  const reviews = [
    {
      id: 1,
      img: img1,
      title: "✓ Deal Closed Successfully!",
      desc: "2 Business GV + 2 Personal GV successfully delivered",
    },
    {
      id: 2,
      img: img2,
      title: "✓ Deal Closed Successfully!",
      desc: "1 Business Google Voice Monthly Calling Setup successfully done for an Indian client",
    },
    {
      id: 3,
      img: img3,
      title: "✓ Repeat Client Deal Completed!",
      desc: `Client previously purchased 1 Ireland Google Voice (Business Line) ● Then successfully bought 2 more Business GV Lines`,
    },
    {
      id: 4,
      img: img4,
      title: "✓ Deal Closed Successfully!",
      desc: "Australia Line (+1 Code) setup done for a Pakistani client",
    },
    {
      id: 5,
      img: img5,
      title: "✓ Deal Closed Successfully!",
      desc: "Google Voice (801 Area Code) successfully delivered",
    },
    {
      id: 6,
      img: img6,
      title: "✓ Repeat Client Deal Completed!",
      desc: ` Ireland Google Voice Line completed for our old repeat client`,
    },
    {
      id: 7,
      img: img7,
      title: "✓ Deal Closed Successfully!",
      desc: "`Germany Business Number Sold ● Another successful deal with our Indian client",
    },
    {
      id: 8,
      img: img8,
      title: "✓ Deal Closed Successfully!",
      desc: " Google Voice (931 Area Code) successfully delivered",
    },
    {
      id: 9,
      img: img9,
      title: "✓ Deal Closed Successfully!",
      desc: "Australia Line Setup completed for an Indian client",
    },
    {
      id: 10,
      img: img10,
      title: "✓ Deal Closed Successfully!",
      desc: " Australia Line (+1 Code) setup done for a Indian Client",
    },
    {
      id: 11,
      img: img11,
      title: "✓ Repeat Client Deal Completed!",
      desc: "Ireland Google Voice Line successfully setup for our repeat client",
    },
    {
      id: 12,
      img: img12,
      title: "✓ Deal Closed Successfully!",
      desc: "USA Line (+1 Code) setup done for a Indian Client",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">

      {/* Glow */}
      <div className="glow absolute top-0 left-0 w-[300px] h-[300px] bg-orange-300/20 blur-[130px] rounded-full"></div>
      <div className="glow absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-400/10 blur-[130px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h2 data-aos="fade-right" className="text-3xl md:text-5xl font-bold font-[Poppins] 2xl:text-6xl">
          Clients <span className="orange">Proof</span> Gallery
        </h2>

        <p data-aos="fade-up" className="text-gray-400 font-[Inter] mt-3 max-w-2xl mx-auto 2xl:text-2xl">
          Our results speak louder than promises. Trusted by clients worldwide with verified screenshots and positive feedback.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-5 gap-6 space-y-6 relative z-10">

        {reviews.map((item) => (
          <div
            data-aos="flip-left"
            key={item.id}
            className={`p-1 rounded-2xl t-card shadow-xl group
      
      `}
          >
            {/* Image Box */}
            <div className="relative overflow-hidden rounded-xl">

              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover rounded-xl group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute tes-overlay inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">

                <h3 className="text-white text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2 leading-6">
                  {item.desc}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Testimonials;