import './static/App.css';
import { useState, useEffect, useLayoutEffect } from 'react'
import { Route, Routes, Link, useNavigate, Links } from 'react-router-dom'
import LoadingScreen from './LoadingScreen';
import Home from './Home'
import AboutMe from './AboutMe';
import HarpyLinks from './HarpyLinks';
import Music from './Music'

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
    <>
    <div style = {{float: 'right'}}>
        <p>v1</p>
      </div>
    <div className="App">
      <Routes>
          <Route path = '/loading' element = {<LoadingScreen />}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/about_me' element = {<AboutMe />}/>
          <Route path = '/links' element = {<HarpyLinks />}/>
          <Route path = '/music' element = {<Music />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
