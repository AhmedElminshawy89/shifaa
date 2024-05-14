import { MdMarkEmailRead } from "react-icons/md";
import {
  FaBusinessTime,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { headerData } from "../assets/data/headerData";
import logo from "../assets/img/log.jpg";

const Footer = () => {
  return (
    <div className="bg-[#271E5C] md:px-14  p-4  max-w-screen-2xl text-white  mx-auto">
      <div className="my-12 flex flex-col md:flex-row gap-5">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary uppercase"
          >
            <img
              src={logo}
              className="w-10 inline-block items-center rounded-full ml-2"
              alt=""
            />
            <span className="text-white">شفاء للرعايه الطبيه</span>
          </a>
          <p className="md:w-1/2">
            مع شفاء للرعاية الطبية نحن نقدم لك أعلى مستويات الخدمات الطبية،
            ونفتخر بتقديم معايير جديدة في مجال الرعاية الصحية المنزلية. يقدم
            فريقنا المتخصص والمدرب خدمات ذات قيمة عالية، ملتزمين براحة المريض
            ورعايته بكل احترافية وأمانة.
          </p>
        </div>
        <div className=" md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className=" space-y-4 mt-5">
            <h4 className="text-xl">العناوين الرئيسيه</h4>
            <ul className=" space-y-3">
              {headerData.map((data, i) => (
                <a
                  key={i}
                  href={`#${data.link}`}
                  className="block hover:text-gray-300"
                >
                  {data.name}
                </a>
              ))}
            </ul>
          </div>
          <div className=" space-y-4 mt-5">
            <h4 className="text-xl">للتواصل الاجتماعي</h4>
            <ul className=" space-y-0 flex items-center justify-between flex-row-reverse">
              <a
                href="https://www.facebook.com/ShifaMedicalCare"
                target="_blank"
                className="flex items-center gap-1 hover:text-gray-300" rel="noreferrer"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/shifaformedicalcare/?fbclid=IwZXh0bgNhZW0CMTAAAR0eFNyCSnjRINxagsKQS_ybjt0OJX_b0NSMRbE8iTpadJ8INzRp3TFo_ys_aem_AdWAU4cHANeE2zXhwub8-F4HWGish7l2ItW7pTPfOMqBQD2arL9E-Eh52ijqvX7tf7xL2ncBwW51IepeMaaG-w7s"
                target="_blank"
                className="flex items-center gap-1 hover:text-gray-300" rel="noreferrer"
              >
                {" "}
                <FaInstagram className="text-3xl" />
              </a>{" "}
              <a
                href="https://wa.me/201284904444"
                target="_blank"
                className="flex items-center gap-1 hover:text-gray-300" rel="noreferrer"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
            </ul>
          </div>
          <div className=" space-y-4 mt-5">
            <h4 className="text-xl">للتواصل معنا</h4>
            <ul className=" space-y-3">
              <a
                href="tel:+201284904444"
                className="hover:text-gray-300 flex items-center gap-1"
              >
                <FaPhone className=" text-2xl" />
                01284904444
              </a>
              <a
                href="mailto:shifaformedicalcare@gmail.com"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                <MdMarkEmailRead className="text-2xl" />
                shifaformedicalcare@gmail.com{" "}
              </a>

              <p
                href="/"
                className="flex items-center gap-1 hover:text-gray-300"
              >
                <FaBusinessTime className=" text-2xl" />
                خدمه 24 ساعه
              </p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center my-4  pt-[15px] w-[100%]">
        تتمنى شفاء للرعاية الطبية لكم رعاية صحية متميزة ومتفردة.{" "}
      </div>
    </div>
  );
};

export default Footer;
