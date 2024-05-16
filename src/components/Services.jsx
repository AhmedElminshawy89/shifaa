import done from "../assets/img/hand.jpg";
import primary from "../assets/img/serv1.jpeg";
import prepare from "../assets/img/serv2.jpg";
import high from "../assets/img/serve3.jpg";
import higher from "../assets/img/serv.webp";
import higher2 from "../assets/img/serv4.jpg";
const Services = () => {
  const packages = [
    {
      img: primary,
      name: " تمريض منزلى",
      describtion:
        "يعدّ التمريض المنزلي أمرًا لا بدّ من تعلّم أساسيّاته لتطبيقه عند الحاجة، وقد تبرز حاجته عند وجود والدين كبار في السنّ خصوصًا عند معاناتهم من الأمراض المُزمنة",
      green: done,
      services: [
        {
          id: 1,
          desc: "إعداد وجبات منتظمة من الطعام المُغذّي والصحّي وتقديمها للشخص المريض.",
        },
        {
          id: 2,
          desc: "اصطحاب المريض لزيارة الطبيب في المواعيد المقرّرة أو عند اللزوم.",
        },
        { id: 3, desc: "تقديم الدعم العاطفي والنفسي للمريض." },
        {
          id: 4,
          desc: "مساعدة المريض في تغيير الضمادات وتنظيف الجروح في حال وجودها.",
        },
        {
            id:5,
            desc:"يتم تقديم الرعاية والدعم للأشخاص الذين يعانون من مشاكل في الجهاز التنفسي، مثل استخدام الأكسجين والأجهزة المساعدة للتنفس."

        }
      ],
    },
    {
        img: prepare,
        name: " رعايه كبار السن بالمنزل و التعامل مع المسنين" ,
        describtion:"رعاية كبار السن في المنزل هي خدمة تقدم للأشخاص المسنين داخل بيوتهم أو محيطهم المألوف، وتهدف هذه الخدمة إلى توفير الرعاية والراحة للمسنين وتلبية احتياجاتهم اليومية  .",
        green: done,
        services: [
          {
            id: 1,
            desc: "يتضمن ذلك توفير الرعاية الطبية الأساسية للمسنين مثل تناول الدواء بانتظام.",
          },
          {
            id: 2,
            desc: "يُساعد المسنين على تناول وجبات صحية متوازنة ومغذية وفقًا لاحتياجاتهم الغذائية الخاصة، بما يشمل إعداد الوجبات وتقديمها لهم",
          },
          { id: 3, desc: "يتمتع المسنون بالرعاية في النظافة الشخصية والاهتمام بنظافة مناطقهم الحساسة والمهمة" }
        ],
      },
      {
        img: high,
        name: "علاج طبيعى",
        describtion:"العلاج الطبيعي هو فن وعلم يهدف إلى استعادة وتحسين وصون القدرة على الحركة والوظيفة الجسدية للأشخاص الذين يعانون من إصابات أو أمراض أو إعاقات مختلفة",
        green: done,
        services: [
          {
            id: 1,
            desc: "يتم تقديم التقييم الشامل للحالة الصحية للمريض، وتحديد المشكلات والتحديات التي يواجهها، وتحديد الأهداف التي يجب تحقيقها من خلال العلاج الطبيعي.",
          },
          {
            id: 2,
            desc: "يتم تعليم المرضى حول الوضع الصحي الخاص بهم، وكيفية الحفاظ على التحسينات التي تحققوها خلال العلاج، وكيفية تجنب إعادة حدوث الإصابات.",
          },
          { id: 3, desc: "يتم تقديم المريض خلال فترة العلاج، وضبط البرنامج العلاجي إذا لزم الأمر، وتقديم التقييم المستمر لتحقيق النتائج المرجوة" 
        }
        ],
      },
      {
        img: higher,
        name: "رعايه مرضى الالزهايمر",
        describtion:"رعاية مرضى الزهايمر تتطلب فهماً عميقاً لاحتياجات الفرد المصاب بهذا المرض الذي يتطور تدريجياً ويؤثر على القدرة على الحفاظ على الذاكرة والوظائف العقلية الأخرى",
        green: done,
        services: [
          {
            id: 1,
            desc: " توفير بيئة مألوفة وآمنة للمريض، تشمل الحماية من المخاطر المحتملة مثل السقوط والإصابات، وتوفير ترتيب وديكور يسهل التعرف عليه"
          },
          {
            id: 2,
            desc: "    الدعم العاطفي والاجتماعي لمساعدتهم في التعامل مع تغيرات شخصيتهم وسلوكهم، وكذلك دعم أفراد العائلة والمقربين"
          },
          { id: 3, desc:"  توفير المساعدة في النشاطات اليومية مثل الأكل والشرب والاستحمام والتلبيس، بالإضافة إلى تقديم التدريب لتعليم أساليب جديدة للتعامل مع التحديات اليومية."
        }
        ],
      },
      {
        img: higher2,
        name: "مهام فريق رعاية المسنين",
        describtion:"فريق رعاية المسنين يضم مجموعة متنوعة من المهنيين المتخصصين الذين يعملون سويًا لتوفير الرعاية والدعم الشامل للمسنين",
        green: done,
        services: [
          {
            id: 1,
            desc: "يقومون بتقديم الرعاية الصحية الشاملة للمسنين، بما في ذلك التشخيص والعلاج وإدارة الأمراض المزمنة. يراقبون حالة الصحة للمسنين ويقدمون العناية اللازمة في حالة الطوارئ."
          },
          {
            id: 2,
            desc: "يوفرون الدعم العاطفي والاجتماعي للمسنين وعائلاتهم. يقومون بتقديم المشورة والتوجيه للتعامل مع التحديات الاجتماعية والعاطفية التي قد يواجهونها"
          },
          { id: 3, desc:"يقدمون المساعدة في النشاطات اليومية مثل الأكل والشرب والاستحمام والتلبيس. يوفرون رعاية شخصية مستمرة للمسنين."
        }
        ],
      },
  ];

  return (
    <div id="خدماتنا">
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto md:pt-[120px]">
        <div className="header-sec mb-[50px]">
          <h1 className="main_title_Articles-one">خدماتنا</h1>
          <h1 className="main_title_Articles-two">نقدم لكم</h1>
        </div>
      </div>
      <div className="md:px-14 p-4 mx-auto mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 md:w-100 mx-auto">
          {packages.map((pkg, idx) => (
            <div
              className="border py-10 md:px-6 px-4 rounded-lg shadow-xl"
              key={idx}
            >
              <img
                src={pkg.img}
                alt=""
                className="h-[250px] w-[100%] object-cover rounded-xl"
              />
              <h3 className="text-3xl font-bold text-center text-[#271E5C] mt-5">
                {pkg.name}
              </h3>
              <p className="my-5 text-[#555] text-center">{pkg.describtion}</p>
              {pkg.services && pkg.services.length > 0 && (
                <ul className="mt-4 space-y-2 px-4">
                  {pkg.services.map((service, index) => (
                    <li key={index} className="flex gap-3 items-center text-[#2b3040]">
                      <img
                        src={pkg.green}
                        className="w-5 h-5  img-icon-hand"
                        alt=""
                      />
                      {service.desc}
                    </li>
                  ))}
                </ul>
              )}
              <div className="w-full mx-auto mt-8 flex items-center justify-center">
                <a href="https://wa.me/+20 128 490 4444" target="_blank" rel="noreferrer" className="btn-contact-us">
                 للتواصل معنا
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
