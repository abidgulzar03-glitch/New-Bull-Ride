import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
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

import AboutUS from "./Pages/AboutUS";
import BlogList from "./Pages/BlogList";
import BlogDetail from "./Pages/BlogDetail";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import HeaderPricing from "./Pages/HeaderPricing";

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

function AppContent() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up" 
    

  return (
    <>
      <Preloader />

      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/pricing" element={<HeaderPricing />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}