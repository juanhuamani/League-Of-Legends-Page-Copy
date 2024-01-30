import React from 'react';
import './Choose.css'

function Choose() {
  return (
    <>
      <div className="choose">
        <div className="text-title">
            <div className="text-container">
              <div className='text'>CHAMPIONS</div>
            </div>
        </div>
        <div className="content">
          <div className="content-size">
            <div className="content-title">
              <div className="header-title">
                <h1>CHOOSE YOUR</h1>
                <strong>CHAMPION</strong>
              </div>
              <div className="header-subtitle">
                Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.
              </div>
            </div>
            <div className="button-content-header">
              <div className="discover-div">
                <p>DISCOVER MORE CHAMPIONS</p>
              </div>
              <div className="play-div">
                <p>PLAY NOW</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-title"></div>
      </div>
    </>  
  );
}

export default Choose;