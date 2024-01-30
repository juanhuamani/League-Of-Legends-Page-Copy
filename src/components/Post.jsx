import React from 'react';
import FrontPage from '../Recursos/012424_TFT_LunarRevel_CG_Promo_Module.jpg' 

import './Post.css'

function Post() {
  return (
    <div className="post">
        <img src={FrontPage} alt="" />
        <div className="description">
            <div className='text-desciption'>
                <div className="subtitulo">MINI CINEMATIC</div>
                <h1>A Dragon's Spirit</h1>
                <p>At the Lunar Festival, only the finest of gifts will do!</p>
            </div>
        </div>
    </div>
  )
}

export default Post;