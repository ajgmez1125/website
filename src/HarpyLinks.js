import './static/Home.css'
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import {Link} from 'react-router-dom'

function HarpyLinks(){

  return (
    <div>
        <div id = 'segment'>
          <h2><a href = 'https://soundcloud.com/harpyzzz' target="_blank">soundcloud</a></h2>
        </div>
    </div>
  );
};

export default HarpyLinks;
