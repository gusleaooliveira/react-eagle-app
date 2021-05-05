import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';

function ListarTodas(props){
    return  <div className="padding-10">
                {props.lista.map((item, indice) => {
                    return  <button className="btn btn-block btn-left eggplant margin-top-5 ">
                                <div className="row">
                                    <IconeUsuario icone={item['icone']} />
                                    <div className="column  column-center margin-left-5 ">
                                        <p className="text-left"><b>{item['nome']}</b></p>
                                        <p className="text-justify text-maximum">{item['mensagem']} </p>
                                    </div>
                                </div>
                            </button>
                })}
            </div>;
}

export default ListarTodas;