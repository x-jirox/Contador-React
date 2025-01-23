import React from 'react';
import '../style/contador.css';

function contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

export default contador;