import React, { useState } from 'react';
import ApplicationDevelopment from './components/AppDevelopment';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AnimationContext from './contexts/animation-context';
import Client from './components/Client';

function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [splashScreenActive, setSplashScreenActive] = useState(true);

  return (
    <AnimationContext.Provider
    value={{setSplashScreenActive}}
    >
      <div className='main-wrapper flex flex-wrap min-h-screen bg-gray-900'>
        {splashScreenActive ? 
          <Home /> :
          <>
            <Navbar />
            <ApplicationDevelopment />
            <Client />
          </>
        }

      </div>
    </AnimationContext.Provider>
  );
}

export default App;
