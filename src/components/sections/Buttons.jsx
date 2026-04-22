import "../../App.css"

function Buttons(){
  return (
    <>
    <div className="buttons flex wrap lg:mt-5 mx-auto md:mx-0 gap-2">
            <button className="font-[Inter] max-[360px]:px-2 max-[360px]:py-1  e-services text-[.6rem] min-[400px]:text-[.8em] min-[400px]:px-4 px-2 py-2 sm:text-[1rem] sm:px-4 sm:py-3 md:text-[.7rem] lg:text-[1rem] lg:px-5 lg:py-4"><div className="btn_text relative">Explore Services</div></button>
            <button className="font-[Inter] max-[360px]:px-2 max-[360px]:py-1  wa_me text-[.6rem] px-2 min-[400px]:text-[.8em] min-[400px]:px-4 py-2 sm:text-[1rem] sm:px-4 sm:py-3 md:text-[.7rem] lg:text-[1rem] lg:px-5 lg:py-4"><div className="btn_text relative">Chat On Whatsapp</div></button>
        </div>
    </>
  )
}

export default Buttons
