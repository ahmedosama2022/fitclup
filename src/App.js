import React, {useState, useEffect} from 'react';
import './App.css';
import BounceLoader from "react-spinners/BounceLoader"
import {BrowserRouter, Route, Router, Routes, Link, NavLink} from 'react-router-dom';
import Header from './Header';
import Programs from './Programs';
import WhyUs from './WhyUs';
import Plans from './Plans';
import Testimonials from './Testimonials';
import Footer from './Footer';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  
  return (

    <BrowserRouter>
      
      {loading ?
        <div className="preloaderr">
          <BounceLoader  color={' #f48915'} loading={loading} height={100} margin={10} size={138}speedMultiplier={1} />
        </div> :
        <>
          <Header />
          <Programs/>
          <WhyUs/>
          <Plans/>
          <Testimonials/>
          <Footer/>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
