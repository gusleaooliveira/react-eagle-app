import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';

function Login(props){
    return  <section className="padding-10 margin-10 card light-gray display-container">
                
                <div className="text-center  padding-16">
                    <IconeUsuario />
                </div>
                
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Digite seu email" id="email" className="white input border-bottom-eggplant-focus" />
                
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Digite sua senha" id="senha" className="white input border-bottom-eggplant-focus" />
                
                <button className="btn btn-block eggplant margin-top-5">
                    <span>Logar </span>
                    <FontAwesomeIcon icon={faUser} />
                </button>
                
                <button className="btn eggplant display-top-right margin-10">
                    <span className=" font-google ">Google </span>
                </button>
            </section>;
}

export default Login;