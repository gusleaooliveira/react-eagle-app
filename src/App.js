import React, { useEffect, useState } from 'react';
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
import "firebase/database";
import "firebase/firestore";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { FirestoreCollection, FirestoreDocument, FirestoreMutation, FirestoreProvider } from "@react-firebase/firestore";
import { firebaseConfig } from "./Config";
import {BrowserRouter as Router, Redirect, Route, Switch, useLocation , useParams,useRouteMatch } from 'react-router-dom';
import ListarTodos from './components/contatos/ListarTodos';


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
  const [usr, setUsr] = useState('');
  const [pathUsuario, setPath] = useState('');

  useEffect(()=>{
    // console.error('Usuário:',usr);
    // console.error('Path:', pathUsuario);
    // console.error('Logado:', isLogged);
  })


  return (
    <React.Fragment>
      <div className="display-container">
        
          <FirebaseAuthProvider firebase={fire.default} {...firebaseConfig}>
            <FirestoreProvider firebase={fire.default} {...firebaseConfig} >
               
                  

                  <FirestoreCollection path="/usuarios" >
                      {d=>{
                        if(d.isLoading) return <p>Carregando!</p>
                        if(d.value.length > 0){
                          return <FirebaseAuthConsumer>
                                  {({isSignedIn, user, providerId})=> {
                                    if(isSignedIn){
                                      let usuario = {
                                          nome: user['displayName'],
                                          email: user['email'],
                                          id: user['uid'],
                                          logotipo: user['photoURL'],
                                          telefone: user['phoneNumber'] 
                                        }
                                        let aux = false; 
                                      d.value.map((valor, indice) => {
                                        if(valor['id'] == user['uid']){
                                          aux=true;
                                        }
                                      })
                                      if(aux == false){
                                        return <FirestoreMutation path="/usuarios" type="add">

                                            {({runMutation})=>{
                                              console.warn('aux',usuario);
                                              runMutation(usuario).then(res => {
                                                console.warn('Salvo com sucesso!', res['key']);
                                                setIsLogged(true);
                                                setUsr(res['key'])
                                                return <p>Salvo com sucesso!</p>
                                              }).catch(erro => {
                                                console.warn('Erro ao salvar: ',erro);
                                              })
                                            }}
                                        </FirestoreMutation>
                                      }
                                    }
                                      
                                  }}
                                </FirebaseAuthConsumer>
                            
                          
                        }
                        if(d.value.length == 0){
                          return <FirestoreMutation path="/usuarios" type="add">
                                    {({runMutation})=>{
                                      return <FirebaseAuthConsumer>
                                                {({isSignedIn, user, providerId})=>{
                                                  if(isSignedIn){ 
                                                    let usuario = {
                                                      nome: user['displayName'],
                                                      email: user['email'],
                                                      id: user['uid'],
                                                      logotipo: user['photoURL'],
                                                      telefone: user['phoneNumber'] 
                                                    }
                                                    runMutation(usuario).then(res => {
                                                      console.warn('Salvo com sucesso!', res['key']);
                                                      setIsLogged(true);
                                                      setUsr(res['key'])
                                                    }).catch(erro => {
                                                      console.warn('Erro ao salvar: ',erro);
                                                    })
                                                  }
                                                }}
                                      </FirebaseAuthConsumer>
                                    }}
                          </FirestoreMutation>
                        }
                      }}
                  </FirestoreCollection>

                  <FirebaseAuthConsumer>
                    {({isSignedIn, user, providerId})=> {
                      if(isSignedIn){setIsLogged(true);setUsr(user['uid']);}
                      else {setIsLogged(false);setUsr('');}
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
                            {isLogged ? <ListarContatos  /> : <Redirect to="/login" /> }
                          </div>
                      )} />

                      <Route path="/contato" render={()=>{
                          <div>
                            {isLogged ? <ListarContato /> : <Redirect to="/login" /> }
                          </div>
                        }} />

                      <Route path="/contatos-cadastrar" render={()=>(
                        <div>
                          {isLogged ? <CadastrarContato /> : <Redirect to="/login" /> }
                        </div>
                      )} />
                      
                      <Redirect from="*" to="/login" />
                    
                    </Switch>
                    <Menu  />
                  </Router>
            </FirestoreProvider>
          </FirebaseAuthProvider>
        </div> 
    </React.Fragment>
  );
}

export default App;


