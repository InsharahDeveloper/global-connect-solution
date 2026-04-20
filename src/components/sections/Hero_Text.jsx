import "../../App.css"

function Hero_Text() {
  return (
    <>
    <div className="heading pt-10 wrap p-5 gap-[3px] min-[600px]:ml-10 sm:mt-5 md:w-[48vw] md:-mt-[20px] lg:ml-0 lg:gap-[5px] lg:w-[50vw] xl:w-[50vw] relative max-[306px]:-ml-5">
        <div className="trust-bdg inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-sm trust-badge -mb-8 max-[955px]:text-[.7rem] max-[765px]:mb-0 max-[500px]:px-2 max-[500px]:py-1 max-[500px]:text-[.5rem]">
  <span>🌍 Trusted Globally</span>
  <span>|</span>
  <span>🔐 Safe Service</span>
  <span>|</span>
  <span>⚡ Fast Support</span>
</div>
        <h1 className="title font-[Montserrat] text-[1.3rem] min-[356px]:text-[1.9rem] sm:text-[3rem] md:text-[2.5rem] lg:text-[3.3rem] xl:text-[3.5rem] md:mt-4">Powering Your <span className="fot-[Inter] block -mt-2 lg:-mt-5 text-[1.1rem] min-[356px]:text-[1.6rem] sm:text-[2.8rem] md:text-[2.4rem] lg:text-[3rem] xl:text-[3.2rem]"><span className="orange">Global</span> Connectivity</span> </h1>
        <p className="text font-[Inter] text-[.9rem] sm:text-[1.1rem] w-[100%] pr-4 md:text-[.9rem] xl:text-[1.2rem]">Premium Google Voice, Gmail, eSIM & Digital Services trusted by clients worldwide.</p>
        <div className="buttons flex wrap lg:mt-5">
            <button className="m-2 font-[Inter] e-services text-[.6rem] min-[400px]:text-[.8em] min-[400px]:px-4 px-2 py-2 sm:text-[1rem] sm:px-4 sm:py-3 md:text-[.7rem] lg:text-[1rem] lg:px-5 lg:py-4"><div className="btn_text relative">Explore Services</div></button>
            <button className="m-2 font-[Inter] wa_me text-[.6rem] px-2 min-[400px]:text-[.8em] min-[400px]:px-4 py-2 sm:text-[1rem] sm:px-4 sm:py-3 md:text-[.7rem] lg:text-[1rem] lg:px-5 lg:py-4"><div className="btn_text relative">Chat On Whatsapp</div></button>
        </div>
    </div>
    </>
  )
}

export default Hero_Text