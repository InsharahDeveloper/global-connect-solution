import { useEffect, useRef } from "react";
import gsap from "gsap";

function Carousel() {
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
    <div className="carousel relative" ref={containerRef}>
      <div className="group">
        <div className="card"><i class="ri-verified-badge-line mr-2"></i> Trusted Worldwide</div>
        <div className="card">|</div>
        <div className="card"><i class="ri-git-repository-private-line mr-2"></i> Secure Service</div>
        <div className="card">|</div>
        <div className="card"><i class="ri-speed-line mr-2"></i> Fast Support</div>
        <div className="card">|</div>
        <div className="card"><i class="ri-global-line mr-2"></i> Global Reach</div>
        <div className="card">|</div>
      </div>
      <div className="group" aria-hidden="true">
        <div className="card"><i class="ri-verified-badge-line mr-2"></i> Trusted Worldwide</div>
        <div className="card">|</div>
        <div className="card"><i class="ri-git-repository-private-line mr-2"></i> Secure Service</div>
        <div className="card">|</div>
        <div className="card"><i class="ri-speed-line mr-2"></i> Fast Support</div>
        <div className="card">|</div>
        <div className="card"><i class="ri-global-line mr-2"></i> Global Reach</div>
        <div className="card">|</div>
      </div>
    </div>
  );
}

export default Carousel;