import './static/Home.css'
import './static/Music.css'
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

function ExclusiveMusic(){
  const[currentSelection, setCurrentSelection] = useState('soundcloud')

  return (
    <div id = "choice_container">
      <div class = 'segment'>
            <p>so quiet....</p>
        </div>
    </div>
  );
};

export default ExclusiveMusic;
