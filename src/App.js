import './App.css';
import logo from './img/logo.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='frecode-logo'
          src={logo}
          alt='logo-contador'
        />
      </div>

      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonClick={true}
        manejarClick={manejarClic}/>
        <Boton 
        texto='Reiniciar'
        esBotonClick={false}
        manejarClick={reiniciarContador}/>

  
      </div>
    </div>
  );
}

export default App;
