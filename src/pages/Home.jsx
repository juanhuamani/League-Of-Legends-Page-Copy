import React from 'react';

import Video from '../Recursos/VideoLol.mp4'
import VideoEffect from '../Recursos/VideoLolEffect.mp4'
import Logo from '../Recursos/logo-1200-04b3cefafba917c9c571f9244fd28a1e.png'

import './Home.css'
import Post from '../components/Post'
import Choose from '../components/Choose';

function Home() {
  return (
    <div className='home'>
      <div className="video-container">
        <div className="overlay-video">
          <video autoPlay muted loop className="overlay-video">
            <source src={VideoEffect} type="video/mp4" />
          </video>  
        </div>
        <div className="main-video">
            <video autoPlay muted loop className="video-content">
              <source src={Video} type="video/mp4" />
            </video>
        </div>
        <div className="contenido-video">
            <div className="img-content">
              <img src={Logo} alt="logoLOL" />  
              <div className='button-content'>
                <a href="https://signup.leagueoflegends.com/en-us/signup/index?_ga=2.222865179.1807917517.1706382486-1727732845.1700398156&_gl=1*p23t2z*_ga*MTcyNzczMjg0NS4xNzAwMzk4MTU2*_ga_FXBJE5DEDD*MTcwNjQ3MDIwNy42LjEuMTcwNjQ3NTQyNy4wLjAuMA..#/"><button>PLAY FOR FREE</button></a>
              </div> 
            </div>
        </div>
      </div>
      <Post/>
      <Choose/>
    </div>
  );
}

export default Home;
