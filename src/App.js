import React from 'react'
import './App.css';
import Header from './Header'
import Image from './icons/Coming Soon img.svg'
import Footer from './icons/Coming Soon Footer.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="ComingSoonBG"></div>
            <div className="ComingSoon">
                <p>World's #1 Online saree Store</p>
                <img className="coming-soon-img" src={Image} alt=""/>
                <img className="coming-soon-footer" src={Footer} alt=""/>
            </div>
    </div>
  );
}

export default App;


{/*
      <button className="coming-soon-login">Login</button>
      <button className="coming-soon-register">Register</button>
*/}