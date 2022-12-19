import React, { useEffect } from "react";

import SkipMenu from "./components/section/SkipMenu";
import Progress from './components/section/Progress';
import Notice from "./components/section/Notice";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Home from "./components/section/Home";
// about
import About from "./components/section/About";
import AboutTitle from "./components/section/about/AboutTitle";
import AboutMe01 from "./components/section/about/AboutMe01";
import AboutMe02 from "./components/section/about/AboutMe02";

import Effect from "./components/section/Effect";
import ReactSection from "./components/section/ReactSection";
import VueSection from "./components/section/VueSection";
import PhpSection from "./components/section/PhpSection";
// footer
import Footer from "./components/layout/Footer";
import Contact from "./components/section/contact/Contact";
import ContactAddress from "./components/section/contact/ContactAddress";

// js
import imagesLoader from "./utils/imagesLoader";
import lenis from "./utils/lenis";
import navigation from "./utils/navigation";
import gsapScroll from "./utils/gsapScroll";
import horizon from "./utils/horizon";
import colorChage from "./utils/colorChage";

function App() {
  useEffect(() => {
    imagesLoader();
    lenis();
    navigation();
    gsapScroll();
    horizon();
    colorChage();
  }, []);

  return (
    <div className="body fixed">
      <SkipMenu />
      <Progress />
      <Notice />

      <Header />
      <Main>
        <Home />
        <About>
          <AboutTitle />
          <AboutMe01 />
          <AboutMe02 />
        </About>
        <Effect />
        <ReactSection />
        <VueSection />
        <PhpSection />
      </Main>
      <Footer>
        <Contact />
        <ContactAddress />
      </Footer>
    </div>
  );
}

export default App;
