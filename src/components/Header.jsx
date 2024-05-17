import { FaBars } from "react-icons/fa";
import { headerData } from "../assets/data/headerData";
import { useState, useEffect, useRef } from "react";
import DarkMode from "./DarkMode";
import Drawer from "../components/Drawer";

const Header = () => {
  const [active, setActive] = useState(false);
  const sliderRef = useRef(null);

  const handleActiveDrawer = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    const handleScroll = () => {
      setActive(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <h1 className="logo">شفاء للرعايه الطبيه</h1>
          <div className="bar" onClick={handleActiveDrawer}>
            <FaBars />
          </div>
          <ul className="main-nav">
            {headerData.map((data, i) => (
              <li key={i}>
                <a href={`#${data.link}`}>{data.name}</a>
              </li>
            ))}
          </ul>
          <div className="theme-big-screen">
            <DarkMode />
          </div>
        </div>
      </header>
      <Drawer
        active={active}
        handleActiveDrawer={handleActiveDrawer}
        sliderRef={sliderRef}
      />
    </>
  );
};

export default Header;
