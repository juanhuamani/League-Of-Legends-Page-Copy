import React from 'react';
import Asassing from '../assets/Asassing.jsx';
import Fighters from '../assets/Fighters.jsx';
import Mages from '../assets/Mages.jsx';
import Marksmen from '../assets/Marksmen.jsx';
import Supports from '../assets/Supports.jsx';
import Tanks from '../assets/Tanks.jsx';

import '../assets/types.css';

const obtenerComponentePorNombre = (nombre) => {

  switch (nombre) {
    case 'Assassin':
      return <Asassing/>;
    case 'Fighter':
      return <Fighters/>;
    case 'Mage':
      return <Mages/>;
    case 'Marksman':
      return <Marksmen/>;
    case 'Support':
      return <Supports/>;
    case 'Tank':
      return <Tanks/>;
    default:
      return null;
  }
};

export default obtenerComponentePorNombre;