import './static/Home.css'
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

function Home(){
  useEffect(() => {
  });

  return (
    <div>
    <div class = "segment" style = {{padding: '200px'}}>
        <div class = 'segment'>
            <p>hurt (homesick)</p>
            <iframe width="100%" height="300" scrolling="no" frameborder="no"
            allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2059506148%3Fsecret_token%3Ds-Yt8wViLHgqA&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    </div>
    </div>
  );
};

export default Home;
