import './static/Home.css'
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import {Link} from 'react-router-dom'
import logo from './static/images/tag-pxl10.png'

function Home(){
  const music = './static/russian ambience.wav'
  const[play] = useSound(music)
  useEffect(() => {
    play()
  });

  return (
    <div>
      <div class = "segment" style = {{padding: '100px'}}>
          <img src = {logo} style = {{height: '500px'}}/>
          <p>(this site is still under construction)</p>
      </div>
      <div class = 'segment'>
        <h3><Link to = "/about_me">about me</Link></h3>
        <h3><Link to = '/music'>music</Link></h3>
        <h3>blog</h3>
        <h3><Link to = '/links'>links</Link></h3>
      </div>
    </div>
  );
};

export default Home;
