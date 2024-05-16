import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
const SwiperHome = () => {
  return (
    <div id="الرئيسيه" className="mb-[100px]">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        autoplay={{ delay: 100 }}
        loop
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        >
        <SwiperSlide>
          <div className="img-wrapper-swiper">
            <img src={slide1} alt="" className="img-swiper" />
            <div className="content-text">
              <p>
                متاح تقديم خدمات التمريض المنزلي لرعاية كبار السن على أعلى مستوى
                .
              </p>
              <a className="btn-contact-us" href="https://wa.me/+20 128 490 4444" target="_blank" rel="noreferrer">
                للتواصل معنا
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper-swiper">
            <img src={slide2} alt="" className="img-swiper" />
            <div className="content-text">
              <p>
                توفير رعاية تمريضية منزلية متميزة لكبار السن بأفضل معايير
                الجودة.
              </p>
              <a className="btn-contact-us" href="https://wa.me/+20 128 490 4444" target="_blank" rel="noreferrer">
                للتواصل معنا
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-wrapper-swiper">
            <img src={slide3} alt="" className="img-swiper" />
            <div className="content-text">
              <p>
                تقديم خدمات تمريض منزلي عالي الجودة لرعاية كبار السن بكفاءة
                عالية.
              </p>
              <a className="btn-contact-us" href="https://wa.me/+20 128 490 4444" target="_blank" rel="noreferrer">
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
