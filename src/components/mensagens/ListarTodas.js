import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';
import Cabecalho from '../Cabecalho'
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
import {BrowserRouter as Router, Link, Redirect, Route, Switch, useLocation , useParams,useRouteMatch } from 'react-router-dom';
import ListarUm from './ListarUm';


function ListarTodas(props){ 
    
    const [usr, setUsr] = useState('');
    const [para, setPara] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    
    useEffect(()=>{
        console.log('Id usr:',usr);
    })
    return  <div >
            <Cabecalho />
            
            <div className="padding-10">
            <FirebaseAuthConsumer>
                    {({isSignedIn, user, providerId})=>{
                        if(isSignedIn){
                            setUsr(user['uid'])
                        }
                    }}
                </FirebaseAuthConsumer>

                <FirestoreCollection path="/contatos" >
                    {d =>{
                        console.warn(d);
                        if(d.isLoading)return <p>Carregando!</p>
                        if(d.value != null){
                            return <select className="input white"  id="email"  onClick={(e)=>{setEmail(e.target.value)}} onFocus={(e)=>{setEmail(e.target.value)}} onChange={(e)=>{setEmail(e.target.value)}}> 
                            { d.value.map((valor, indice) => {
                                console.error('Verificacao: ',valor['idUsuario'] == usr);
                                if(valor['idUsuario'] == usr){
                                    return (
                                    <option value={valor['idContato']} >
                                        {valor['nome']}
                                    </option>
                                    )
                                }
                            })} 
                        </select>

                        }
                    }}
                </FirestoreCollection>
                </div>
            
                <ListarUm idCliente={email} idUsuario={usr} />

            <div className="padding-10">
                {/* {props.lista.map((item, indice) => {
                    return  <button className="btn btn-block btn-left eggplant margin-top-5 ">
                                <div className="row">
                                    <IconeUsuario icone={item['icone']} />
                                    <div className="column  column-center margin-left-5 ">
                                        <p className="text-left"><b>{item['nome']}</b></p>
                                        <p className="text-justify text-maximum">{item['mensagem']} </p>
                                    </div>
                                </div>
                            </button>
                })} */}
            </div>
            </div>;
}

export default ListarTodas;