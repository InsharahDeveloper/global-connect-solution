import "../../App.css";
import Buttons from "./Buttons";

function Hero_Text({ scrollToServices }) {
  return (
    <div className="space-y-5 max-[913px]:text-center text-left px-2 lg:px-13 w-full 2xl:px-5 2xl:ps-40">

      <div data-aos="fade-right" className="inline-flex flex-wrap trust-badge justify-center md:justify-start gap-2 px-4 py-2 rounded-full md:border md:border-gray-300 text-xs sm:text-sm max-[1040px]:px-2  sm:text-[1rem] 2xl:text-xl">
        <span>🌍 Trusted Globally</span>
        <span>|</span>
        <span>🔐 Safe Service</span>
        <span>|</span>
        <span>⚡ Fast Support</span>
      </div>

      <h1 data-aos="fade-right" className="font-[Montserrat] font-bold leading-tight text-2xl sm:text-5xl 2xl:text-[4rem] hero-heading">
        Powering Your
        <span className="block text-1xl sm:text-4xl mt-2 2xl:text-[4rem]">
          <span className="orange">Global</span> Connectivity
        </span>
      </h1>

      <p data-aos="fade-right" className="text-gray-400 2xl:text-2xl 2xl:max-w-5xl text-sm sm:text-[1.4rem] lg:text-lg max-w-xl mx-auto min[913]:mx-0 2xl:mx-0">
        Premium Google Voice, Gmail, eSIM & Digital Services trusted by clients worldwide.
      </p>

      <Buttons scrollToServices={scrollToServices}/>
    </div>
  );
}

export default Hero_Text;