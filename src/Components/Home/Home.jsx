import React, { useEffect, useState } from 'react';
import './Home.css';
import Typical from 'react-typical';

function Home() {
  const [bg, setBg] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const [flag, setFlag] = useState(true)
  const mssg = [
    1000, "I Need You For Whole My Life💕", 1000,
    "You are the reson of My Smile😊", 1000,
    "Made for each other👫", 1000,
    "Long Distance😪", 1000,
    "Our Aniversary 6th July🎈🥧🎂", 1000
  ]
  useEffect(() => {
    const heartAnimation = new HeartAnimation(); // Assuming HeartAnimation is correctly defined/imported
    heartAnimation.init('#div1', {
      width: 30,
      height: 30,
      heartBG: 'pink',
      delay: 4000,  // Time interval for heart creation
      opacity: 0.3,
      blast: {
        width: 25,
        height: 125,
        blastBG: 'red',  // Color of heart fragments
        radius: 50,
        border: 1,
        opacity: 0.3
      }
    });
  }, []);

  window.addEventListener('click', () => {
    if (flag) {
      setBg('black');
      setTextColor('white');
      setFlag(false);
    } else {
      setBg('white');
      setTextColor('black');
      setFlag(true);
    }
  })

  return (
    <div id='div1' className={`vh-100 overflow-auto`} style={{ backgroundColor: bg }}>

      {/* text */}
      <div className={`text_div vh-100 p-2 d-flex justify-content-center align-items-center`} style={{ backgroundColor: bg, color: textColor }}>
        <p>
          <Typical
            steps={mssg}
            loop={Infinity}
            wrapper="p"
          />
        </p>
      </div>

      <div className='vh-100 d-flex overflow-x-hidden mb-3'>
        <video
         width={'100%'}
         height={'100%'}
          autoPlay
          loop
          muted
          src="./3827573-uhd_3840_2160_30fps (1).mp4">
        </video>
      </div>


    </div>
  );
}

export default Home;
