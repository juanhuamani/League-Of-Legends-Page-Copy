import React from 'react';
import logo_lol from '../Recursos/logo.png'
import logo_riot from '../Recursos/riot-logo.png'
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    toggleMenu();
  }, []); 

  const toggleMenu = () => {
    setMenuVisible(true);
  };

const maxSizes = [1680, 1580, 1360, 1225, 1110, 995];


  return (
    <>
    {maxSizes.map((maxSize, index) => (
        <style key={index}>
          {`
           @media (max-width: ${maxSize}px) {
            .text:nth-last-child(-n+${index + 1}) {
                display: none;
              }
            }
          `}
        </style>
      ))}

    <div className={`navbar ${isMenuVisible ? 'show-menu' : ''}`}>
        <div className="container">
          <div className="logo_riot">
            <a href="https://www.riotgames.com/es"><img src={logo_riot} alt="logo" /></a>
          </div>
          <div className="logo">
            <a href="https://www.leagueoflegends.com/"><img src={logo_lol} alt="logo" /></a>
          </div>
          <div className="sections">
            <div className="text">
              <Link className="links" to="/">
                <p>GAME</p>
              </Link>
            </div>
            <div className="text">
              <Link className="links" to='/champion'>
                <p>CHAMPIONS</p>
              </Link>
            </div>
            <div className="text">
              <p>NEWS <i className="bi bi-caret-down-fill"></i></p>
            </div>
            <div className="text">
              <p>PATH NOTES</p>
            </div>
            <div className="text">
              <p>DISCOVER <i className="bi bi-caret-down-fill"></i></p>
            </div>
            <div className="text">
              <p>ESPORTS <i className="bi bi-arrow-up-right"></i></p>
            </div>
            <div className="text">
              <p>UNIVERSE <i className="bi bi-arrow-up-right"></i></p>
            </div>
            <div className="text">
              <p>SHOP <i className="bi bi-arrow-up-right"></i></p>
            </div>
            <div className="text">
              <p>SUPPORT <i className="bi bi-arrow-up-right"></i></p>
            </div>
          </div>
          <div className="utility">
            <div className="search">
              <i className="bi bi-search"></i>
            </div>
            <div className="search" style={{backgroundColor:'black'}}>
              <i className="bi bi-globe"></i>
            </div>
            <div className="button_navbar signin">
                <a>SIGN IN</a>
            </div>
            <div className="button_navbar login">
                <a>PLAY NOW</a>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;