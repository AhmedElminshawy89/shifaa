import { packages } from "../assets/data/Packages";
const Services = () => {
  return (
    <div id="خدماتنا">
      <div className="md:px-14 px-4 max-w-screen-2xl mx-auto md:pt-[120px] section-bg">
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
              <h3 className="text-3xl font-bold text-center mt-5">
                {pkg.name}
              </h3>
              <p className="my-5 desc-serv text-center">{pkg.describtion}</p>
              {pkg.services && pkg.services.length > 0 && (
                <ul className="mt-4 space-y-2 px-4">
                  {pkg.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex gap-3 items-center"
                    >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
