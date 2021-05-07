import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';
import * as fire from "firebase/app";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { Link } from 'react-router-dom';
import Cabecalho from '../Cabecalho'

function Login(props){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        console.log({email: email, senha: senha});
    })


    return  <div>
        <Cabecalho />
            <FirebaseAuthConsumer> 
                {({isSignedIn, user, providerId})=>{

                    if(isSignedIn == false){
                        return <section className="padding-10 margin-10 card light-gray display-container">
                                
                                <h3 className="text-center">Login</h3>
                                
                                <div className="text-center  padding-16">
                                    <IconeUsuario />
                                </div>
                                                
                                <label htmlFor="email">Email:</label>
                                <input type="email" placeholder="Digite seu email" onFocus={(e)=>{setEmail(e.target.value)}} onChange={(e)=>{setEmail(e.target.value)}} id="email" className="white input border-bottom-eggplant-focus" />
                                
                                <label htmlFor="senha">Senha:</label>
                                <input type="password" placeholder="Digite sua senha" id="senha"  onFocus={(e)=>{setSenha(e.target.value)}}  onChange={(e)=>{setSenha(e.target.value)}} className="white input border-bottom-eggplant-focus" />
                                
                                <div className="row row-right">
                                    <Link to="/cadastro" className="margin-top-5 text-blue ">
                                        Cadastre-se
                                    </Link>
                                </div>
                                
                                <button className="btn btn-block eggplant margin-top-5" onClick={()=>{
                                    const googleAuthProvider = new fire.default.auth.GoogleAuthProvider();
                                    fire.default.auth().signInWithEmailAndPassword(email, senha)
                                    .then(function(userCredential){
                                        console.log(userCredential);
                                        alert('Conectado com sucesso!')
                                    })
                                    .catch(function(error){
                                        alert('Erro ao conectar!')
                                        alert(error.message)
                                    });
                                    console.log('Login');
                                }}>
                                    <span>Logar </span>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                                
                            </section>
                    }
                }}

            </FirebaseAuthConsumer>
            
            </div>;
}

export default Login;