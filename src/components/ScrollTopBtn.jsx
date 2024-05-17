import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className={`${isVisible ? "scroll-btn-wrapper" : "hidden"}`}>
      <button type="button" onClick={scrollToTop}>
        <IoIosArrowUp />
      </button>
    </div>
  );
}

export default ScrollTopBtn;
