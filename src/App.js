import React from 'react';
import './css/estilo.css';
import './css/hcw.min.css';
import IconeUsuario from './components/IconeUsuario';
import Login from './components/usuario/Login'
import Cadastrar from './components/usuario/Cadastro';
import CadastrarContato from './components/contatos/CadastrarUm'
import ListarContato from './components/contatos/ListarUm'
import usuario from './usuario.svg'
import Mensagem from './components/mensagens/ListarUm'
import Mensagens from './components/mensagens/ListarTodas'
import ListarContatos from './components/contatos/ListarTodos'

let contatoUnico = [
    {nome: "Usuário Novo", icone: usuario, email: "novo.usuario@gmail.com" }
]
let esteUsuario = { nome: "Usuário" }

let mensagens = [
    {de: "Usuário", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário Novo" },
    {de: "Usuário Novo", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário" },
    {de: "Usuário", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário Novo" },
    {de: "Usuário Novo", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário" },
    {de: "Usuário", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário Novo" },
    {de: "Usuário Novo", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário" },
    {de: "Usuário", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário Novo" },
    {de: "Usuário", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário Novo" },
    {de: "Usuário Novo", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário" },
    {de: "Usuário Novo", mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", para: "Usuário" },
]


let listaMensagens = [
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {nome: "Usuário novo", icone: usuario, mensagem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
]

let listaUsuarios = [
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
    {nome: "Usuário novo", icone: usuario},
]

function App() {
  return (
    <React.Fragment>
        <CadastrarContato />
    </React.Fragment>
  );
}

export default App;
