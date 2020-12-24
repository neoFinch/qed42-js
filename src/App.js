import React, { Fragment, useEffect, useRef, useState } from 'react';
import ApplicationDevelopment from './components/AppDevelopment';
import SplashScreen from './components/Home';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import AnimationContext from './contexts/animation-context';
import Client from './components/Client';
import Banner from './components/Banner';
import ProjectHighlights from './components/ProjectHighlights';
import ContactUs from './components/ContactUs';
import gsap from 'gsap';

  function checkSplashLoaderStatus() {
    if (window.performance) {
      console.info("window.performance works fine on this browser");
    }
    console.info(performance.navigation.type);
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      console.info( "This page is reloaded" );
      return false
    } else {
      console.info( "This page is not reloaded");
      return true;
    }
  }

function App() {

  let status = checkSplashLoaderStatus();
  
  const [splashScreenActive, setSplashScreenActive] = useState(status);
  const [currentBg, setCurrentBg] = useState('#161618');
  const [showRedBg, setShowRedBg] = useState(false);
  const [openNav, setOpenNav] = useState(true);
  // const [openNav, setOpenNav] = useState(true);

  const appRef = useRef(null);
  const scrollToHomeRef = useRef(null);
  const scrollToProjectRef = useRef(null);
  const scrollToClientRef = useRef(null);
  const scrollToServicesRef = useRef(null);
  const scrollToDevRef = useRef(null);
  const scrollToContactRef = useRef(null);

  

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg
    })
  }, [currentBg]);

  const executeScroll = (panelName) => {
    switch(panelName) {

      case 'Home' :
        scrollToHomeRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        break;
      case 'Project' :
        scrollToProjectRef.current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        break;
      case 'Client' :
        scrollToClientRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
        break;
      case 'Services' :
        scrollToServicesRef.current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        break;
      case 'Dev' :
        scrollToDevRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        break;
      case 'Contact' :
        scrollToContactRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        break;
    }
  }

  return (
    <AnimationContext.Provider
      value={{
        setSplashScreenActive,
        setCurrentBg,
        currentBg,
        splashScreenActive,
        openNav,
        setOpenNav,
        showRedBg,
        setShowRedBg,
        executeScroll
      }}>
      <div 
        ref={appRef}
        className='main-wrapper flex flex-wrap min-h-screen' 
        style={{
          // background: currentBg
        }}>
        {splashScreenActive ?
          <SplashScreen /> :
          <>
            <Navbar />
            <Banner reff={scrollToHomeRef}/>
            <ProjectHighlights reff={scrollToProjectRef}/>
            <Client reff={scrollToClientRef}/>
            <OurServices reff={scrollToServicesRef}/>
            <div ref={scrollToDevRef}>
              <ApplicationDevelopment />
            </div>
            <ContactUs reff={scrollToContactRef}/>

          </>
        }

      </div>
    </AnimationContext.Provider>
  );
}

export default App;
