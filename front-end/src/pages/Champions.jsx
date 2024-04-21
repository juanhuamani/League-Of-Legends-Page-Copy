import React from 'react';
import Colection from '../components/Colection';

function Champions() {
  document.title = 'Champions - League of Legends';

  return <>
    <div className="choose" style={{ paddingTop: "70px", height: "300px" }}>
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
                 With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.
              </div>
            </div>
          </div>
        </div>
        <div className="text-title"></div>
      </div>

    <Colection />
    </>;
}

export default Champions;