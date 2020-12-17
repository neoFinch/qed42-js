import React, { useEffect, useState } from 'react';
import ApplicationDevelopment from './components/AppDevelopment';
import SplashScreen from './components/Home';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import AnimationContext from './contexts/animation-context';
import Banner from './components/Banner';

function App() {

  const [splashScreenActive, setSplashScreenActive] = useState(false);
  
  return (
    <AnimationContext.Provider
      value={{
        setSplashScreenActive
      }}>
      <div className='main-wrapper flex flex-wrap min-h-screen' style={{background: '#fff'}}>
        {splashScreenActive ? 
          <SplashScreen /> :
          <>
            <Navbar />
            <Banner />
            <ApplicationDevelopment />
            <OurServices />
          </>
        }
        
      </div>
    </AnimationContext.Provider>
  );
}

export default App;
