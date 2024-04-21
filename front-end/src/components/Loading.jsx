import React from 'react';
import './Loading.css';

function Loading() {
  return <div className='loading-container'>
        <div id="contenedor-loading">
            <div className="contenedor-loader">
                <div className="loader"></div>
            </div>
            <div className="cargando">Cargando...</div>
        </div>
    </div>;
}

export default Loading;