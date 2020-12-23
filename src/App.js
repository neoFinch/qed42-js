import React, { useEffect, useState } from 'react';
import ApplicationDevelopment from './components/AppDevelopment';
import SplashScreen from './components/Home';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import AnimationContext from './contexts/animation-context';
import Client from './components/Client';
import Banner from './components/Banner';
import ProjectHighlights from './components/ProjectHighlights';
import ContactUs from './components/ContactUs';

function App() {

  const [splashScreenActive, setSplashScreenActive] = useState(false);
  const [currentBg, setCurrentBg] = useState('#161618');

  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        setSplashScreenActive,
        setCurrentBg,
        currentBg
      }}>
      <div
        className='main-wrapper flex flex-wrap min-h-screen'
      // style={{background: currentBg}}
      >
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
