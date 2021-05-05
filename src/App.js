import React from 'react';
import './css/estilo.css';
import './css/hcw.min.css';
import IconeUsuario from './components/IconeUsuario';
import Login from './components/usuario/Login'
import Cadastrar from './components/usuario/Cadastro';
import CadastrarContato from './components/contatos/CadastrarUm'

function App() {
  return (
    <React.Fragment>
        <CadastrarContato />
    </React.Fragment>
  );
}

export default App;
