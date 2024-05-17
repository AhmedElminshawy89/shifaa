import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
const SwiperHome = () => {
  return (
    <div id="الرئيسيه" className="mb-[100px] main">
      <Swiper
        style={{ height: "450px" }}
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="img-wrapper-swiper">
            <img src={slide1} alt="" className="img-swiper" />
            <div className="content-text">
              <p className="pb-5">
                التمريض المنزلي، المقدم من مؤسسة شفاء، يوفر الرعاية الطبية
                والشخصية للمرضى في منازلهم، مما يعزز راحتهم وأمانهم ويساهم في
                تحسين جودة حياتهم وتسريع شفائهم
              </p>
              <a
                className="btn-contact-us"
                href="https://wa.me/+201284904444"
                target="_blank"
                rel="noreferrer"
              >
                للتواصل معنا
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper-swiper">
            <img src={slide2} alt="" className="img-swiper" />
            <div className="content-text">
              <p className="pb-5">
                مع شفاء، نقدم لك خدمات طبية منزلية متميزة بجودة عالية، بفضل فريق
                متخصص يضمن راحتك وتحسين صحتك بشكل ملحوظ. اختر شفاء لتجربة رعاية
                صحية منزلية استثنائية.
              </p>
              <a
                className="btn-contact-us mt-20"
                href="https://wa.me/+201284904444"
                target="_blank"
                rel="noreferrer"
              >
                للتواصل معنا
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper-swiper">
            <img src={slide3} alt="" className="img-swiper" />
            <div className="content-text">
              <p className="pb-5">
                مع شفاء، نقدم أفضل الخدمات الطبية ونوفر نقلة نوعية في الرعاية
                الصحية المنزلية عالية الجودة من خلال فريق متخصص ومدرب لضمان راحة
                المريض ورعايته.
              </p>
              <a
                className="btn-contact-us"
                href="https://wa.me/+201284904444"
                target="_blank"
                rel="noreferrer"
              >
                للتواصل معنا
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
