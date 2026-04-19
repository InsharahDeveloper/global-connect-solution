import "../../App.css"
import anime from "../../assets//herosection/animate.png"
import c1 from "../../assets//herosection/connections.png"
import c2 from "../../assets//herosection/r-connection.png"
import c3 from "../../assets//herosection/waves-anime.png"
import gsap from "gsap"
import { useEffect , useRef } from "react";

function Anime_elements() {

    const anime1 = useRef(null);
    const anime2 = useRef(null);
    const anime3 = useRef(null);


  useEffect(() => {
  gsap.to([anime1.current,anime2.current], {
    rotation: "+=360",
    duration: 30,
    repeat: -1,
    ease: "linear"
  })
}, []);
  return (
    <>
    <div className="anime-div">
    <img src={anime} ref={anime1} className="absolute w-20 max-[770px]:right-40 max-[770px]:bottom-50 md:left-10 md:top-10 max-[680px]:right-20 max-[460px]:w-15 max-[400px]:bottom-[220px]" alt="" />
    <img src={c2} ref={anime2} className="absolute w-30 left-140 top-20 rotate-45 max-[1000px]:left-100 max-[770px]:left-140 max-[710px]:w-20 max-[670px]:left-120 max-[670px]:top-10 max-[580px]:left-100  max-[500px]:left-[73%] max-[460px]:w-15 max-[380px]:top-6"  alt="" />
    </div>
    </>
  )
}

export default Anime_elements