import React, { useEffect, useState } from 'react';
import ApplicationDevelopment from './components/AppDevelopment';
import SplashScreen from './components/Home';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import AnimationContext from './contexts/animation-context';
import Client from './components/Client';
import Banner from './components/Banner';
import ProjectHighlights from './components/ProjectHighlights';

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
  const [openNav, setOpenNav] = useState(true);

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
    
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        setSplashScreenActive,
        setCurrentBg,
        currentBg,
        splashScreenActive,
        openNav,
        setOpenNav
      }}>
      <div 
        className='main-wrapper flex flex-wrap min-h-screen' 
        style={{
          // maxHeight: window.innerHeight
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
          </>
        }

      </div>
    </AnimationContext.Provider>
  );
}

export default App;
