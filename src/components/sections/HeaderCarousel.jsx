import { useEffect, useRef } from "react";
import gsap from "gsap";

function HeaderCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const groups = containerRef.current.querySelectorAll(".group");

      const tl = gsap.to(groups, {
        xPercent: -100, // Move exactly one full group width
        duration: 15,
        repeat: -1,
        ease: "none",
      });

      // Hover events ko context ke andar hi add karein
      const pause = () => tl.pause();
      const play = () => tl.play();

      const container = containerRef.current;
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", play);

      // Clean up listeners context ke khatam hone par
      return () => {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", play);
      };
    }, containerRef);

    return () => ctx.revert(); // Pura animation cleanup
  }, []);

  return (
    <div className="h-carousel mt-0 py-2" ref={containerRef}>
      <div className="group">
        <div className="card"><i className="ri-verified-badge-line mr-2"></i>Trusted by 500+ businesses across 50+ countries.</div>
        <div className="card"><i className="ri-verified-badge-line mr-2"></i>Trusted by 500+ businesses across 50+ countries.</div>
        <div className="card"><i className="ri-verified-badge-line mr-2"></i>Trusted by 500+ businesses across 50+ countries.</div>

      </div>
      <div className="group" aria-hidden="true">
        <div className="card"><i className="ri-verified-badge-line mr-2"></i>Trusted by 500+ businesses across 50+ countries.</div>
        <div className="card"><i className="ri-verified-badge-line mr-2"></i>Trusted by 500+ businesses across 50+ countries.</div>

        <div className="card"><i className="ri-verified-badge-line mr-2"></i>Trusted by 500+ businesses across 50+ countries.</div>
      </div>
    </div>
  );
}

export default HeaderCarousel;