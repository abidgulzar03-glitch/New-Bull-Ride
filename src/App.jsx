import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Preloader from "./Components/PreLoader";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import HeroAbout from "./Components/HeroAbout";
import Services from "./Components/Service";
import Howitworks from "./Components/HowitWorks";
import Review from "./Components/Review";
import Ourclients from "./Components/OurClients";
import Pricing from "./Components/Pricing";
import ScreenSlider from "./Components/ScreenSlider";
import Downloadsection from "./Components/DownloadSection";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import AboutUS from "./Pages/AboutUS";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HeroAbout />
      <Services />
      <Howitworks />
      <Review />
      <Ourclients />
      <Pricing />
      <ScreenSlider />
      <Downloadsection />
      <Blog />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUS />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;