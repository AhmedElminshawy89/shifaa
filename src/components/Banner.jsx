import src from "../assets/img/cta.jpg";
const Banner = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ">
      <div className="gradientBg rounded-xl rounded-br-[80px] px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          <div>
            <img src={src} alt="" className="lg:h-[360px] rounded-lg" />
          </div>
          <div className="md:w-3/5 pr-5">
            <h2 className="md:text-7xl text-xl font-bold text-white mb-6 leading-relaxed">
              {" "}
              شفاء للرعاية الطبية
            </h2>
            <p className="text-white text-lg mb-6">
              مع شفاء للرعاية الطبية نحن نقدم لك أعلى مستويات الخدمات الطبية،
              ونفتخر بتقديم معايير جديدة في مجال الرعاية الصحية المنزلية.
            </p>
            <div className="space-x-6 space-y-4">
              <a
                href="https://wa.me/+201284904444"
                target="_blank"
                rel="noreferrer"
                className="btn-contact-us"
              >
                للتواصل معنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
