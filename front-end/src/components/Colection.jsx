import React from 'react';
import Loading from './Loading';

import './Colection.css';

import { fetchChampions } from '../utils/fetchChampions';
import { useState, useEffect ,useRef   } from 'react';
import { Link } from 'react-router-dom';


function Colection() {
  const [champions, setChampions] = useState(null);
  const [imagenCargada, setImagenCargada] = useState(false);
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [mostarChamp, setMostarChamp] = useState('');
  const [maxWidth, setMaxWidth] = useState('20%');
  
  //Search bar

  const handleBotonClick = () => {
    setMostrarDiv((prevMostrarDiv) => {
      if (!prevMostrarDiv) {
        inputRef.current.focus();
      }
      return !prevMostrarDiv;
    });
  };

  const handleDocumentClick = ({ target }) => {
    if (mostrarDiv && !target.closest(".buscar")) {
      setInputValue(''); 
      setMostrarDiv(false); 
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [mostrarDiv]);
  
  const handleInputChange = (event) => {
    event.stopPropagation();
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const xSearch = () => {
    setMostarChamp(''); 
    setInputValue('');
    setMostrarDiv(false); 
    setMaxWidth('20%');
    
  }

  //Logica de la busqueda

  const handleSearchChamp = (event) => {
    const divContent = event.target.id;
    setInputValue(''); 
    SearchChamp(divContent, 'id');
    setMaxWidth('none');
  };

  const SearchChamp = (champion, propietie) => {
    if (!champions || !champions[champion]) return null;
  
    switch (propietie) {
      case 'id':
      case 'name':
      case 'title':
      case 'tags':
      case 'blurb':
        setMostarChamp(champions[champion][propietie])
      default:
        return null;
    }
  };


  const handleClickRol = (event) => {
    const champValue = event.target.id;
    if (champValue === 'All') {
      setMostarChamp('');
      return;
    }
    setMostarChamp(champValue)
    setMaxWidth('20%');
  };

  //Fetch Data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const championsData = await fetchChampions();
        setChampions(championsData);
      } catch (error) {
        console.error('Error al obtener campeones:', error.message);
      }
    };
    fetchData();
  }, []);


  //Loading

  if (!champions) {
    return <Loading/>;
  }
  
  const handleImagenCargada = () => {
    setImagenCargada(true);
  };


  return (
    <>
      {champions ? (
        <>
          <div className="filter">
          <div className="filter-size">
            <div className="filter-content">
              <div className="buscar" 
                onClick={handleBotonClick} 
                style={{gap:mostrarDiv ? "15px" :"10px"}} 
              >
              <input  
                ref={inputRef} 
                className="input-search" 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
              />
                <i className="bi bi-search" style={{color:"rgb(194,144,45)",fontSize:"20px"}}></i><p>SEARCH</p> <i className="bi bi-x-circle" onClick={xSearch} ></i>
                <div className="hidden-names" style={{ display: mostrarDiv ? "block" : "none"  }}>
                    {Object.values(champions).map((champion) => (
                      <div 
                        key={champion.id} 
                        className='hidden-names-div' 
                        onClick={handleSearchChamp } 
                        style={{ display: inputValue === '' || champion.name.toLowerCase().includes(inputValue.toLowerCase()) ? 'flex' : 'none'}}
                        id={champion.id}
                      >
                        {typeof champion.name === 'string' ? champion.name.toUpperCase() : champion.name}
                      </div>
                    ))}
                </div>
              </div>
              <div className="linea-vertical"></div>
              <div className="roles">
                <ul className="character">
                    <li id='All' onClick={handleClickRol}>All</li>
                    <li id='Assassin' onClick={handleClickRol}>ASSASING</li>
                    <li id='Fighter' onClick={handleClickRol}>FIGHTERS</li>
                    <li id='Mage' onClick={handleClickRol}>MAGES</li>
                    <li id='Marksman' onClick={handleClickRol}>MARKSMEN</li>
                    <li id='Support' onClick={handleClickRol}>SUPPORTS</li>
                    <li id='Tank' onClick={handleClickRol}>TANKS</li>
                </ul>
              </div>
              <div className="linea-vertical"></div>
              <div className="dificulty">
                  <p>All DIFFICULTIES</p>
              </div>
            </div>
          </div>
        </div>
          <div className='colection'>
            <div className='champions'>
              {Object.values(champions).map((champion) => (
                <div 
                  key={champion.id} 
                  className='champion' 
                  id={champion.id} 
                  style={{ display: mostarChamp === '' || champion.id === mostarChamp || champion.tags.includes(mostarChamp) ? 'flex' : 'none' ,
                  maxWidth: maxWidth  }}
                >
                  <Link to={`/champions/${champion.id}`}>
                    <div className="card">
                      {!imagenCargada && <Loading />}
                      <img
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                        alt={champion.name}
                        onLoad={handleImagenCargada}
                        style={{ display: imagenCargada ? 'block' : 'none' }}
                      />
                      <div className="title-champion">
                        <h2>{champion.name}</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Cargando campeones...</p>
      )}
    </>
  );
}

export default Colection;