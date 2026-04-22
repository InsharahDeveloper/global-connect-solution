// Anime_elements.jsx
import anime from "../../assets/herosection/animate.png";
import c2 from "../../assets/herosection/r-connection.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Anime_elements() {
  const anime1 = useRef(null);
  const anime2 = useRef(null);

  useEffect(() => {
    gsap.to([anime1.current, anime2.current], {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <img
        ref={anime1}
        src={anime}
        className="absolute w-14 sm:w-20 top-0 left-0"
        alt=""
      />

      <img
        ref={anime2}
        src={c2}
        className="absolute w-16 sm:w-24 top-5 right-10"
        alt=""
      />
    </>
  );
}

export default Anime_elements;