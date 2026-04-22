import "../../App.css";
import Buttons from "./Buttons";

function Hero_Text() {
  return (
    <div className="space-y-5 text-center md:text-left md:px-4 w-full">
      
      <div className="inline-flex flex-wrap trust-badge justify-center md:justify-start gap-2 px-4 py-2 rounded-full md:border md:border-gray-300 text-xs sm:text-sm max-[1040px]:px-2  ">
        <span>🌍 Trusted Globally</span>
        <span>|</span>
        <span>🔐 Safe Service</span>
        <span>|</span>
        <span>⚡ Fast Support</span>
      </div>

      <h1 className="font-[Montserrat] font-bold leading-tight text-2xl sm:text-4xl lg:text-5xl">
        Powering Your
        <span className="block text-1xl sm:text-3xl lg:text-5xl mt-2">
          <span className="orange">Global</span> Connectivity
        </span>
      </h1>

      <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto md:mx-0">
        Premium Google Voice, Gmail, eSIM & Digital Services trusted by clients worldwide.
      </p>

      <Buttons />
    </div>
  );
}

export default Hero_Text;