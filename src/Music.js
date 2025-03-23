import './static/Home.css'
import './static/Music.css'
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import PublicMusic from './PublicMusic'
import ExclusiveMusic from './ExclusiveMusic'

function Music(){
  const[currentSelection, setCurrentSelection] = useState('soundcloud')

  return (
    <div id = "choice_container">
      <div class="folder-tab">
        <p style={{ cursor: 'pointer' }} onClick={() => setCurrentSelection('soundcloud')}>
          soundcloud
        </p>
      </div>
      <div class="folder-tab">
        <p style={{ cursor: 'pointer' }} onClick={() => setCurrentSelection('exclusives')}>
          exclusives
        </p>
      </div>
      {
        currentSelection == 'soundcloud' ? <PublicMusic /> : <ExclusiveMusic /> 
      }
    </div>
  );
};

export default Music;
