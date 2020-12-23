import React, { useEffect, useRef, useState } from 'react';
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

  const appRef = useRef(null);

  // console.log('first : ', splashScreenActive);
  // if (window.performance) {
  //   console.info("window.performance works fine on this browser");
  // }
  // console.info(performance.navigation.type);
  // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  //   console.info( "This page is reloaded" );
  //   setSplashScreenActive(false);
  // } else {
  //   console.info( "This page is not reloaded");
  //   setSplashScreenActive(true);
  // }

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBg
    })
  }, [currentBg]);

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
        setShowRedBg
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
            <Banner />
            <ProjectHighlights />
            <Client />
            <OurServices />
            <ApplicationDevelopment />
            <ContactUs />
          </>
        }

      </div>
    </AnimationContext.Provider>
  );
}

export default App;
