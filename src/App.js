import React from 'react';
import './css/estilo.css';
import './css/hcw.min.css';
import IconeUsuario from './components/IconeUsuario';
import Login from './components/usuario/Login'
import Cadastrar from './components/usuario/Cadastro';
import CadastrarContato from './components/contatos/CadastrarUm'
import ListarContato from './components/contatos/ListarUm'
import usuario from './usuario.svg'

let contatoUnico = [
    {nome: "Usuário Novo", icone: usuario, email: "novo.usuario@gmail.com" }
]

function App() {
  return (
    <React.Fragment>
        
    </React.Fragment>
  );
}

export default App;
