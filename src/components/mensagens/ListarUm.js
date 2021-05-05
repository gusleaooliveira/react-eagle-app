import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';

function ListarUm(props){
    return  <div>
               <div className="padding-10 margin-10 card light-gray display-container altura">
                {props.lista.map((item, indice) => {
                    return  <div>
                                {item['de'] == props.usuario['nome'] && <p className="text-right text-eggplant"><b>{item['de']}</b></p>}
                                {item['de'] != props.usuario['nome'] && <p className="text-left text-teal"><b>{item['de']}</b></p>}
                                <p className="text-justify text-indent-15">{item['mensagem']}</p>
                                <br />
                            </div>
                })}
                
            </div>
            <div className="row sticky-bottom padding-5 raisin-black">
                <input type="text"  placeholder="Enivar mensagem" className="white input  border-bottom-eggplant-focus col-10" />
                <button className="btn eggplant col-2">
                    <span className="hide-on-mobile">Enviar </span>
                    <FontAwesomeIcon icon={faShare} />
                </button>
                </div>
            </div>;
}

export default ListarUm;