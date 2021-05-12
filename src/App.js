import React, { useEffect } from 'react';
import './css/estilo.css';
import './css/hcw.min.css';
import IconeUsuario from './components/IconeUsuario';
import Login from './components/usuario/Login'
import Cadastrar from './components/usuario/Cadastro';
import CadastrarContato from './components/contatos/CadastrarUm';
import ListarContato from './components/contatos/ListarUm';
import usuario from './usuario.svg';
import Mensagem from './components/mensagens/ListarUm';
import Mensagens from './components/mensagens/ListarTodas';
import ListarContatos from './components/contatos/ListarTodos';
import Menu from './components/Menu';
import Cabecalho from './components/Cabecalho';
import * as fire from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { firebaseConfig } from "./Config";
import {BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import ListarTodos from './components/contatos/ListarTodos';
import { useState } from 'react/cjs/react.development';

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

function App(props) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(()=>{
    console.log('Logado:',isLogged);
  })

  return (
    <React.Fragment>
      <div className="display-container">
        <FirebaseAuthProvider firebase={fire.default} {...firebaseConfig}>
          <FirebaseAuthConsumer>
            {({isSignedIn, user, providerId})=>{
              console.log(user);
              if(isSignedIn)setIsLogged(true)
              else setIsLogged(false)
            }}
          </FirebaseAuthConsumer>

            
          




            <Router>
              <Switch>


                <Route path="/login" render={()=>(
                    <div>
                      {isLogged ? <Redirect to="/mensagens" /> : <Login /> }
                    </div>
                )} />

                <Route path="/cadastro" render={()=>(
                    <div>
                      {isLogged ? <Redirect to="/mensagens" /> : <Cadastrar /> }
                    </div>
                )} />


                <Route path="/mensagens" render={()=>(
                    <div>
                      {isLogged ? <Mensagens lista={listaMensagens} /> : <Redirect to="/login" /> }
                    </div>
                )} />

                <Route path="/contatos" render={()=>(
                    <div>
                      {isLogged ? <ListarContatos lista={listaUsuarios} /> : <Redirect to="/login" /> }
                    </div>
                )} />

                <Redirect from="*" to="/login" />
               
              </Switch>
              <Menu />
            </Router>
        </FirebaseAuthProvider>
        </div> 
    </React.Fragment>
  );
}

export default App;


