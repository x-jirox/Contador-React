import React from 'react'
import '../style/boton.css'

function boton({ texto, esBotonClick, manejarClick }) {
    return (
        <button
            className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
            onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default boton;