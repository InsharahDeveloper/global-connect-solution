import gsap from "gsap";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Social_Pages from "./Social_pages";

function Sidebar({ open, setOpen }) {
  const sidebarRef = useRef(null);
  const menuRef = useRef([]);
  const socialRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  // Theme Sync
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.body.classList.contains("dark-theme"));
    };

    checkTheme();
    window.addEventListener("themeChange", checkTheme);

    return () => {
      window.removeEventListener("themeChange", checkTheme);
    };
  }, []);

  // Sidebar Animation
  useEffect(() => {
  if (open) {
    // Sidebar open
    gsap.to(sidebarRef.current, {
      right: 0,
      duration: 0.5,
      ease: "power3.out",
      zIndex: 100,
    });

    // LI right side se apni jagah aayein
    gsap.fromTo(
      menuRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        delay: 0.2,
        ease: "power3.out",
      }
    );

    // Icons neeche se
    gsap.fromTo(
      socialRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
        ease: "power3.out",
      }
    );

  } else {
    // Icons reverse
    gsap.to(socialRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
    });

    // LI apni jagah se right side jayein
    gsap.to(menuRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.4,
      stagger: {
        each: 0.08,
        from: "end",
      },
      ease: "power3.in",
    });

    // Sidebar band
    gsap.to(sidebarRef.current, {
      right: "-100%",
      duration: 0.5,
      delay: 0.35,
      ease: "power3.inOut",
      zIndex: -3,
    });
  }
}, [open]);

  // Outside click close
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Client Trust Wall",
    "Contact Us",
  ];

  return (
    <div ref={sidebarRef} className={`sidebar ${isDark ? "dark" : ""}`}>
      <div className="close m-5" onClick={() => setOpen(false)}>
        <button>
          <X className="cursor-pointer cl" />
        </button>
      </div>

      <ul className="navs-div font-[Poppins] sm:text-[.9rem] lg:text-[1.2rem] xl:text-[1.5rem] ml-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            ref={(el) => (menuRef.current[index] = el)}
            className="lg:m-4 my-2 li relative"
          >
            {item}
          </li>
        ))}
      </ul>

      <div ref={socialRef}>
        <Social_Pages />
      </div>
    </div>
  );
}

export default Sidebar;