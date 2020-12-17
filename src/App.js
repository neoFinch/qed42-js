import React, { useEffect, useState } from 'react';
import ApplicationDevelopment from './components/AppDevelopment';
import SplashScreen from './components/Home';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import AnimationContext from './contexts/animation-context';
import Client from './components/Client';
import Banner from './components/Banner';

function App() {

  const [splashScreenActive, setSplashScreenActive] = useState(true);
  const [currentBg, setCurrentBg] = useState('#161618');

  // useEffect(() => {
  //   setCurrentBg
  // }, [currentBg]);

  return (
    <AnimationContext.Provider
      value={{
        setSplashScreenActive,
        setCurrentBg,
        currentBg
      }}>
      <div className='main-wrapper flex flex-wrap min-h-screen'>
        {splashScreenActive ?
          <SplashScreen /> :
          <>
            <Navbar />
            <Banner />
            <ApplicationDevelopment />
            <OurServices />
            <Client />
          </>
        }

      </div>
    </AnimationContext.Provider>
  );
}

export default App;
