import './static/Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './static/images/tag-pxl10.png';
import { animated, useSpring } from 'react-spring';

function Home() {
  const [key, setKey] = useState(0);

  const image_opacity = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });
  const about_me_opacity = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2500 } });
  const music_opacity = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } });
  const links_opacity = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 4000 } });

  // Animate clip-path for the box expanding from the bottom
  const box_clipPath = useSpring({
    from: { clipPath: 'inset(0% 0% 100% 0%)' }, // Fully hidden from the bottom
    to: { clipPath: 'inset(0% 0% 0% 0%)' }, // Fully visible
    config: { duration: 200,
              mass: 10,
              friction: 500,
              tension: 2000,
    }, // Animation duration
  });

  // Trigger animation reset when component reloads
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);

  return (
    <div key={key}>
      <animated.div style={box_clipPath}>
      <animated.div style={image_opacity}>
          <div className="segment" style={{ padding: '50px' }}>
            <img src={logo} style={{ margin: 'auto', width: '300px' }} />
          </div>
      </animated.div>
      <div className="segment">
        <animated.div style={about_me_opacity}>
          <h3><Link to="/about_me">about me</Link></h3>
        </animated.div>

        <animated.div style={music_opacity}>
          <h3><Link to="/music">music</Link></h3>
        </animated.div>
        <animated.div style={links_opacity}>
          <h3><Link to="/links">links</Link></h3>
        </animated.div>
      </div>
      </animated.div>
    </div>
  );
}

export default Home;
