import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import FavOther from "./components/FavOther";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import SwiperHome from "./components/SwiperHome";
function App() {
  return (
    <>
      <Header />
      <SwiperHome />
      <Services/>
      <AboutUs/>
      <FavOther/>
      <Feature/>
      <Banner/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
