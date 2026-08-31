import "./App.css";
import Header from "./Components/Header.jsx";
import Preloader from "./Components/PreLoader.jsx";
import Hero from "./Components/Hero.jsx";
import Features from "./Components/Features.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Service";
import Howitworks from "./Components/HowitWorks.jsx";
import Review from "./Components/Review";
import Ourclients from "./Components/OurClients.jsx";
import Pricing from "./Components/Pricing";
import ScreenSlider from "./Components/ScreenSlider.jsx";
import Downloadsection from "./Components/Downloadsection";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Howitworks />
      <Review />
      <Ourclients />
      <Pricing />
      <ScreenSlider />
      <Downloadsection />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
