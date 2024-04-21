import React from 'react';
import './Difficulty.css';

function Difficulty({ grade }) {
  let difficultyConfig;

  if (grade >= 0 && grade <= 3) {
    difficultyConfig = { level: 1, name: 'LOW', content: 'DIFFICULTY' };
  } else if (grade > 3 && grade <= 7) {
    difficultyConfig = { level: 2, name: 'MODERATE', content: 'DIFFICULTY' };
  } else if (grade > 7 && grade <= 10) {
    difficultyConfig = { level: 3, name: 'HIGH', content: 'DIFFICULTY' };
  } else {
    difficultyConfig = { level: 0, name: 'UNKNOWN', content: 'DIFFICULTY' };
  }

  return (
    <>
      <div className='difficulty-div'>
        <div className='difficulty-div-graph'>
            <span className='bar' ></span>    
            <span className='bar' style={{ opacity: difficultyConfig.level >= 2 ? '1' : '0.3' }}></span>
            <span className='bar' style={{ opacity: difficultyConfig.level >= 3 ? '1' : '0.3' }}></span>    
        </div>
      </div>
      <div className='difficulty-div-name'>{difficultyConfig.content}</div>
      <div className='difficulty-div-content'>{difficultyConfig.name}</div>
    </>
  );
}

export default Difficulty;