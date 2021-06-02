import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';
import Cabecalho from '../Cabecalho';
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




function CadastrarUm(props){
    const [email, setEmail] = useState('');
    const [logotipo, setLogotipo] = useState('')
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [usr, setUsr] = useState('');
    const [index, setIndex] = useState('');

    useEffect(()=>{
        console.log({
            email: email,
            logotipo: logotipo,
            nome: nome,
            telefone: telefone,
            idUsuario: usr,
            idContato: index
        });
    })

    return  <div>
            <Cabecalho path="/contatos" />
            <section className="padding-10 margin-10 card light-gray display-container">
                
                <h3 className="text-center">Cadastrar Contato</h3>
                
                <div className="text-center  padding-16">
                    <IconeUsuario />
                </div>
                
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite seu nome" id="nome"  onFocus={(e)=>setNome(e.target.value)} onChange={(e)=>setNome(e.target.value)} className="white input border-bottom-eggplant-focus" />

                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" placeholder="Digite seu telefone" id="telefone" onFocus={(e)=>setTelefone(e.target.value)} onChange={(e)=>setTelefone(e.target.value)} className="white input border-bottom-eggplant-focus" />

                <label htmlFor="idUsr">Email:</label>
                <select id="idUsr" onFocus={(e)=>setEmail(e.target.value)} onChange={(e)=>setEmail(e.target.value)} className="input white">
                    <FirestoreCollection path="/usuarios">
                        {d => {
                            return d.value.map((valor, indice) => {
                                if(valor['id'] != usr){
                                console.log('emails', valor['id'], valor['email']);
                                return <option value={valor['id']}>{valor['email']}</option>
                                }
                            })
                        }}
                    </FirestoreCollection>
                </select>

                <input type="hidden" id="logotipo" value="" />
                
                <FirebaseAuthConsumer>
                    {({isSignedIn, user, providerId}) => {
                        if(isSignedIn){
                            setUsr(user['uid']); 
                            return <input type="hidden" id="usr" value={user['uid']} />
                        }
                        else{ 
                            setUsr('');  
                            return <input type="hidden" id="usr" value={user['uid']} />
                        }
                    }}
                </FirebaseAuthConsumer>
                
                <input type="hidden" id="idUsr" value={index} />

                <FirestoreMutation path="/contatos" type="add">
                        {({runMutation}) => {    
                            
                            return <button className="btn btn-block eggplant margin-top-5" onClick={()=>{
                                let usuario = {
                                    idContato: document.querySelector("#idUsr").value,
                                    logotipo: document.querySelector("#logotipo").value,
                                    nome: document.querySelector("#nome").value,
                                    telefone: document.querySelector("#telefone").value,
                                    idUsuario: document.querySelector("#usr").value
                                }
                             runMutation(usuario).then(res => {
                                    alert('Salvo com sucesso!')
                                }) 
                            .catch(erro => {
                                alert('Erro ao salvar!')
                                alert(erro.message)
                            })
                            }}>
                                <span>Cadastrar </span>
                                <FontAwesomeIcon icon={faUserPlus} />
                            </button>
                        }}
                    </FirestoreMutation>
                
                
            </section>
                </div>;
}

export default CadastrarUm;