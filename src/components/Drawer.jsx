import {FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { headerData } from "../assets/data/headerData";
const Drawer = ({active,sliderRef,handleActiveDrawer}) => {
  return (
    <div className={`slider ${active ? "active" : ""}`} ref={sliderRef}>
    <ul className="main-nav">
      <li className="drawerTop">
        <FaRegWindowClose onClick={handleActiveDrawer}/>
        <DarkMode/>
      </li>
      {headerData.map((data, i) => (
        <li key={i}>
          <a href={`#${data.link}`}>{data.name}</a>
        </li>
      ))}
      <div className="mt-10 flex items-center justify-around flex-row-reverse">
        <a
          href="https://www.facebook.com/ShifaMedicalCare"
          target="_blank"
          className="flex items-center gap-1" rel="noreferrer"
        >
          <FaFacebook className="text-3xl" />
        </a>
        <a
          href="https://www.instagram.com/shifaformedicalcare/?fbclid=IwZXh0bgNhZW0CMTAAAR0eFNyCSnjRINxagsKQS_ybjt0OJX_b0NSMRbE8iTpadJ8INzRp3TFo_ys_aem_AdWAU4cHANeE2zXhwub8-F4HWGish7l2ItW7pTPfOMqBQD2arL9E-Eh52ijqvX7tf7xL2ncBwW51IepeMaaG-w7s"
          target="_blank"
          className="flex items-center gap-1" rel="noreferrer"
        >
          <FaInstagram className="text-3xl" />
        </a>{" "}
        <a
          href="https://wa.me/201284904444"
          target="_blank"
          className="flex items-center gap-1" rel="noreferrer"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </ul>
  </div>
  )
}

export default Drawer
