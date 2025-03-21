import './static/Home.css'
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import {Link} from 'react-router-dom'

function Home(){
  const music = './static/russian ambience.wav'
  const[play] = useSound(music)
  useEffect(() => {
    play()
  });

  return (
    <div>
      <div class = "segment" style = {{padding: '200px'}}>
          <h1>harpy</h1>
          <p>(this site is still under construction)</p>
      </div>
      <div class = 'segment'>
        <h3><Link to = "/about_me">about me</Link></h3>
        <h3>music</h3>
        <h3>blog</h3>
        <h3>links</h3>
      </div>
    </div>
  );
};

export default Home;
