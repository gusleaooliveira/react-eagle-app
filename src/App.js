import React from 'react';
import './css/estilo.css';
import './css/hcw.min.css';
import usuario from './usuario.svg' 


function App() {
  return (
    <React.Fragment>
        <img src={usuario} className="icon-large" />
    </React.Fragment>
  );
}

export default App;
