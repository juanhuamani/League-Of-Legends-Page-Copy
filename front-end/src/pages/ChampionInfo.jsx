import React from 'react';
import { useParams} from 'react-router-dom'
import {useEffect} from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Difficulty from '../components/Difficulty.jsx';

import Icon from '../utils/icon.jsx';
import fetchEspecificChampion from '../utils/fetchEspecificChampion';

import './ChampionInfo.css';

function ChampionInfo() {
  const { id } = useParams();
  
  const [championExists, setChampionExists] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenCargada, setImagenCargada] = useState(false);

  let img_url ;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const championData = await fetchEspecificChampion(id);
        setChampionExists(championData);
        if(championExists != false){
          document.title = `${championData[id].name}, ${championData[id].title.charAt(0).toUpperCase()}${championData[id].title.slice(1)}`;
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  const handleImagenCargada = () => {
    setImagenCargada(true);
  };

  if(championExists){
    img_url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
  }

  if (championExists == false ) {
    return <>
            <div className="pag-error">
              <h1><i className="bi bi-exclamation-triangle"></i> ¡ OOPS ! <i className="bi bi-exclamation-triangle"></i></h1>
              <h2>El campeón que buscas no existe <i className="bi bi-emoji-frown"></i></h2>
              <Link to="/champions" className="btn btn-three"><span>Volver a campeones</span></Link>
            </div>
        </>;
  }

  
 

  return <>
          <div 
            className="championsInfo" 
          >
            {loading ? (
              <Loading />
            ) : (
              <>
              {championExists ? (
                <div className="championInfo">
                  <div className="choose" style={{ paddingTop: "40px" }}>
                    <div className="background-info">
                      <div className="dark-overlay"></div>
                      <div className="infoImage">
                        <img src={img_url} alt="" />
                      </div>
                    </div>
                    <div className="text-title" >
                        <div className="text-container">
                          <div className='text' style={{color:"white" , marginTop:"300px"}}>OVERVIEW</div>
                        </div>
                    </div>
                    <div className="content">
                      <div className="content-size" >
                        <div className="content-image">
                          <div className="img-chm">
                            <div className="dark-img"></div>
                            {imagenCargada ? null : <Loading />}
                            <img  
                              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championExists[id].id}_0.jpg`}
                              alt={championExists[id].name}
                              onLoad={handleImagenCargada}
                            />
                          </div>
                        </div>
                        <div className="content-title" style={{marginTop:"-210px"}} >
                          <div className="size-title" style={{color:"white"}}>
                            <h1>{championExists[id].title.toUpperCase()}</h1>
                            <div className="content-title-div">
                              <strong>{championExists[id].name.toUpperCase()}</strong>
                            </div>
                            <div className="characteristics">
                              <div className="characteristics-type">
                                <div className="characteristics-role">
                                  <div className="characteristics-icon">
                                    {Icon(championExists[id].tags[0])  }
                                  </div>
                                  <div className='characteristics-icon-name'>ROLE</div>
                                  <div className='characteristics-icon-content'>{championExists[id].tags[0].toUpperCase()}</div>  
                                </div>
                                <div className="characteristics-difficulty">
                                  <Difficulty grade={championExists[id].info.difficulty}/>
                                </div>
                              </div>
                              <div className="linea-vertical"></div>
                              <div className="characteristics-description">
                                <h2>{championExists[id].blurb}</h2> 
                              </div>
                              <div className="characteristics-margin"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="text-title">-</div>
                  </div>
                  <div className="space-color"></div>
                  <div className="content-type">
                    {Icon(championExists[id].tags[0] ) }
                  </div>
              </div>
            ) : (
              <Loading />
            )}
          </>
        )}
      </div>
    </>
}

export default ChampionInfo;