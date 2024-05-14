import about from "../assets/img/about1.webp";
import about2 from "../assets/img/about2.jpg";
const AboutUS = () => {
  return (
    <div
      className="md:px-14 p-4 max-w-screen-lg md:mx-auto pt-[120px]"
      id="تعرف_علينا"
    >
      <div className="header-sec mb-[50px]">
        <h1 class="main_title_Articles-one">تعرف علينا</h1>
        <h1 class="main_title_Articles-two">راحتك معنا في كل خطوة.</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-100">
          <img src={about} alt="" className="rounded-lg" />
        </div>
        <div className="md:w-2/4 w-100">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            خدماتنا المتميزة في الرعاية الصحية المنزلية
          </h2>
          <p className="text-tartiary text-lg mb-7">
            نوفر الرفاهية والراحة للمرضى من خلال المرافقة وتوفير الدعم اللازم.
            نضمن تلبية احتياجات المرضى الغذائية بإشرافنا على الوجبات اليومية
            وتقديم التذكير بالأدوية. نحرص على مظهر المريض واحترام خصوصيته، مما
            يجعله يشعر بالراحة والثقة. نقدم خدمات تحضير الوجبات والمساعدة في
            تناولها، بالإضافة إلى مساعدتهم في التنقل وتمارين العلاج الطبيعي
            بالمنزل.
          </p>
          <button className="btn-contact-us">
            <a href="/">للتواصل معنا</a>
          </button>{" "}
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 mt-[100px]">
        <div className="md:w-1/2 w-100">
          <img src={about2} alt="" className="rounded-lg" />
        </div>
        <div className="md:w-2/4 w-100">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            دعمنا لراحتك في كل تفاصيل الحياة اليومية
          </h2>
          <p className="text-tartiary text-lg mb-7">
            تجهيز الملابس الشخصية والمساعدة في ارتدائها، جزء من خدماتنا التي
            تسعى لتسهيل حياتك اليومية وجعلها أكثر راحة ويسرًا. مرافقة المريض
            والمشاركة الاجتماعية معه في السفر وفي جميع الأنشطة اليومية، هو جزء
            لا يتجزأ من التزامنا برفاهيتك وراحتك. بجانب الاهتمام براحة المريض،
            نحرص على الحفاظ على ترتيب غرفته وحمامه، بالإضافة إلى ترتيب متابعة
            الوجبات والرعاية اليومية، لتضمن أن تكون بيئته مريحة ومرتبة بشكل
            يساعده على الشعور بالراحة والأمان.
          </p>
          <button className="btn-contact-us">
            <a href="/">للتواصل معنا</a>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
