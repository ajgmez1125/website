import './static/App.css';
import { useState, useEffect, useLayoutEffect } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import LoadingScreen from './LoadingScreen';
import Home from './Home'
import AboutMe from './AboutMe';

function App() {

  const nav = useNavigate()

  //Changes title of page, loads before the page is painted so there is no delay unlike using useEffect which
  //causes signifigant delays
  useLayoutEffect(() => {
    document.title = 'harpys cool website';
   }, []);

   useEffect(() => {
    nav('/loading')
   }, [])


  return (
    <div className="App">
      <Routes>
          <Route path = '/loading' element = {<LoadingScreen />}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/about_me' element = {<AboutMe />}/>
      </Routes>
    </div>
  );
}

export default App;
