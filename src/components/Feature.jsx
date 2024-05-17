import feature from "../assets/img/star1.jpg";
import feature2 from "../assets/img/star2.webp";
import feature3 from "../assets/img/star3.jpeg";
const Feature = () => {
  return (
    <div
      id="ما_يميزنا"
      className="md:px-14 px-4 my-24 max-w-screen-2xl mx-auto md:pt-[120px]"
    >
      <div className="header-sec mb-[50px]">
        <h1 className="main_title_Articles-one">ما يميزنا</h1>
        <h1 className="main_title_Articles-two">لماذا نحن نختلف عن الاخرون؟</h1>
      </div>
      <div className="flex lg:flex-row flex-col items-start justify-between">
        <div className="lg:w-1/4 mr-8">
          <h3 className="text-3xl  font-bold mb-3">
            الرعاية الطبية المتميزة في منزلك
          </h3>
          <p className="text-base desc-serv">
            نحن نبرز كخيار متميز بفضل التزامنا بتقديم خدمات طبية منزلية بجودة لا
            مثيل لها. يتميز فريقنا بالكفاءة والاحترافية في توصيل المعامل الطبية
            مباشرة إلى باب منزل العميل، مما يوفر لهم راحة البال والرعاية الصحية
            على أعلى مستوى. تضع خبرتنا وتفانينا في خدمة عملائنا في مقدمة
            أولوياتنا، مما يجعلنا الخيار الأمثل للرعاية الطبية في المنزل.
          </p>
        </div>
        <div className="w-full lg:w-3/4 flex">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8 mt-8">
            <div
              className="bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-2xl p-8  flex justify-center items-center flex-wrap
                hover:-translate-y-4  transition-all duration-300 cursor-pointer"
            >
              <img src={feature} alt="" className="rounded-lg max-w-[400px] w-[100%]" />
              <h5 className="text-2xl font-semibold  px-5 text-center mt-5">
                توصيل المعامل إلى باب منزلك.
              </h5>
            </div>
            <div
              className="bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-2xl p-8 flex justify-center items-center flex-wrap
                hover:-translate-y-4  transition-all duration-300 cursor-pointer md:mt-16"
            >
              <img src={feature2} alt="" className="rounded-lg max-w-[400px] w-[100%]" />
              <h5 className="text-2xl font-semibold  px-5 text-center mt-5">
                تقديم مركز الاشعه إلى باب منزلك.
              </h5>
            </div>
            <div
              className="bg-[rgba(255,255,255,.04)] rounded-[35px] h-96 shadow-2xl p-8  flex justify-center items-center flex-wrap
                hover:-translate-y-4  transition-all duration-300 cursor-pointer"
            >
              <img src={feature3} alt="" className="rounded-lg max-w-[400px] w-[100%]" />
              <h5 className="text-2xl font-semibold  px-5 text-center mt-5">
                التنقل مع المريض ومرافقته فى السفر .
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
