import "../../App.css"
import Flip_Emoji from "./Flip_Emoji"

function Hero_Text() {
  return (
    <>
    <div className="heading pt-10 w-[90vw] xl:w-50 wrap p-5 gap-[3px] min-[600px]:ml-10 sm:mt-5 md:w-[50%] lg:w-[40%] md:-mt-[20px] lg:ml-0 lg:gap-[5px] lg:w-[55vw] xl:w-[50vw] relative">
      <div className="icons xl:text-[1.3rem] xl:mt-10">
        <Flip_Emoji emoji="🌐"/>
        <Flip_Emoji emoji="🚀" className="left-7 xl:text-[1.3rem]"/>
        <Flip_Emoji emoji="🔒" className="left-14 xl:text-[1.3rem]"/>
        <Flip_Emoji emoji="📱" className="left-21 xl:text-[1.3rem]"/>
        <Flip_Emoji emoji="💼" className="left-28 xl:text-[1.3rem]"/>
        <Flip_Emoji emoji="⚡" className="left-35 xl:text-[1.3rem]"/>
        </div>
        <h1 className="title font-[Montserrat] text-[1.5rem] min-[356px]:text-[1.9rem] mt-4 sm:text-[3rem] md:text-[2rem] lg:text-[3.3rem] xl:text-[3.5rem]">Powering Your <span className="block -mt-2 lg:-mt-5"><span className="orange">Global</span> Connectivity</span> </h1>
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