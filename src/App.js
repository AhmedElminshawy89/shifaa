import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import ContactBtn from "./components/ContactBtn";
import ContactPhone from "./components/ContactPhone";
import FavOther from "./components/FavOther";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Services from "./components/Services";
import SwiperHome from "./components/SwiperHome";
function App() {
  return (
    <>
      <Header />
      <ScrollTopBtn />
      <ContactBtn />
      <ContactPhone />
      <SwiperHome />
      <Services />
      <AboutUs />
      <FavOther />
      <Feature />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
