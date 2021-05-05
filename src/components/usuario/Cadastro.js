import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAt } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';

function Cadastro(props){
    return  <section className="padding-10 margin-10 card light-gray display-container">
                
                <h3 className="text-center">Cadastrar Usuário</h3>
                
                <div className="text-center  padding-16">
                    <IconeUsuario />
                </div>
                
                <label htmlFor="nome">Nome:</label>
                <input type="text" placeholder="Digite seu nome" id="nome" className="white input border-bottom-eggplant-focus" />
                
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" placeholder="Digite seu telegone" id="email" className="white input border-bottom-eggplant-focus" />
                
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Digite seu email" id="email" className="white input border-bottom-eggplant-focus" />
                
                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="Digite sua senha" id="senha" className="white input border-bottom-eggplant-focus" />
                
                <button className="btn btn-block eggplant margin-top-5">
                    <span>Cadastrar </span>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
                
            </section>;
}

export default Cadastro;