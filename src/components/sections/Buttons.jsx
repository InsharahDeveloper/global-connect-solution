import "../../App.css"

function Buttons({ scrollToServices }){
  return (
    <>
    <div className="buttons flex wrap sm:mt-5 mx-auto min-[913px]:mx-0 gap-5">
            <button data-aos="zoom-in" onClick={scrollToServices} className="font-[Inter] max-[360px]:px-2 max-[360px]:py-1 2xl:text-2xl 2xl:px-12 2xl:py-5  e-services text-[.6rem] min-[400px]:text-[.8em] min-[400px]:px-4 px-2 py-2 sm:text-[1rem] sm:px-3 sm:py-2 md:text-[.9rem] mt-2 lg:text-[1rem] lg:px-4 lg:py-3"><div className="btn_text relative">Explore Services</div></button>
            <a data-aos="zoom-in" href="https:\\wa.me\+923000584969" target="_blank"><button className="font-[Inter] max-[360px]:px-2 max-[360px]:py-1 2xl:text-2xl 2xl:px-12 2xl:py-5  wa_me text-[.6rem] px-2 min-[400px]:text-[.8em] min-[400px]:px-4 py-2 sm:text-[1rem] sm:px-3 sm:py-2 md:text-[.9rem] mt-2 lg:text-[1rem] lg:px-4 lg:py-3"><div className="btn_text relative">Chat On Whatsapp</div></button></a>
        </div>
    </>
  )
}

export default Buttons
