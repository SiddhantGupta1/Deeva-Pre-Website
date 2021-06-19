import React from 'react'
import './App.css';
import Logo from './icons/deeva purple 1.svg'
import Store from './icons/google-play-badge.png'

function App() {
  return (
    <div className="App">
      <div className="ComingSoonBG"></div>
            <div className="ComingSoon">
              <img className="Logo" src={Logo} alt="Deeva Logo"/>
              <p>Website Coming Soon</p>
              <a href="https://play.google.com/store/apps/details?id=com.deeva">Click here to Download the Deeva App <img className="GooglePlay" src={Store} alt="Google Play" /></a>
            </div>
    </div>
  );
}

export default App;