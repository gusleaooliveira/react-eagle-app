import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';

function ListarUm(props){
    return  <div>
                {props.lista.map((item, indice) => {
                        console.log(item)
                        return <section className="padding-10 margin-10 card light-gray display-container">
                                    <h3 className="text-center">Listar Contato</h3>

                                    <div className="text-center  padding-16">
                                        <IconeUsuario icone={item['icone']} />
                                    </div>

                                    <p><b>Nome:</b></p>
                                    <p>{item['nome']}</p>
                                    
                                    <p><b>Email:</b></p>
                                    <p>{item['email']}</p>
                                    
                                    
                                    <button className="btn   eggplant margin-top-5 display-top-right">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </section>
                })}
            </div>;
}

export default ListarUm;