import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAt } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';
import * as fire from "firebase/app";
import Cabecalho from '../Cabecalho';

function Cadastro(props){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('senha')

    return  <div>
            <Cabecalho path="/login" />

            <section className="padding-10 margin-10 card light-gray display-container">
                
                <h3 className="text-center">Cadastrar Usuário</h3>
                
                <div className="text-center  padding-16">
                    <IconeUsuario />
                </div>
                
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Digite seu email" onFocus={(e)=>setEmail(e.target.value)} onChange={(e)=>setEmail(e.target.value)}  className="white input border-bottom-eggplant-focus" />
                
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Digite sua senha" onFocus={(e)=>setSenha(e.target.value)} onChange={(e)=>setSenha(e.target.value)} className="white input border-bottom-eggplant-focus" />
                
                <button className="btn btn-block eggplant margin-top-5" onClick={()=>{
                    const googleAuthProvider = new fire.default.auth.GoogleAuthProvider();
                    fire.default.auth().createUserWithEmailAndPassword(email, senha)
                        .then((userCredential)=>{
                            fire.default.auth().signOut();
                            alert('Usuário Cadastrado corretamente!')
                            console.log(userCredential)
                        })
                        .catch((error) => {
                            alert('Erro ao cadastrar!')
                            alert(error.message)
                            console.log(error);
                        })
                    fire.default.auth().signOut();
                }}>
                    <span>Cadastrar </span>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
                
            </section>
            </div>;
}

export default Cadastro;