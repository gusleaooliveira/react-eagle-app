import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faTimes, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';
import { useParams } from 'react-router-dom';
import Cabecalho from '../Cabecalho';

function ListarUm(props){
    let { id } = useParams();
    
    return  <div >
                <Cabecalho />
                {console.error('ID:', id)}            
            </div>;
}

export default ListarUm;


{/* <p>{id}</p>
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
                })} */}