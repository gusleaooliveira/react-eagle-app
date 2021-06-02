import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';
import { FirestoreCollection, FirestoreMutation } from '@react-firebase/firestore';

function ListarUm(props){
    return  <div>
               <div className="padding-10 margin-10 card light-gray display-container altura">
                {/* {props.lista.map((item, indice) => {
                    return  <div>
                                {item['de'] == props.usuario['nome'] && <p className="text-right text-eggplant"><b>{item['de']}</b></p>}
                                {item['de'] != props.usuario['nome'] && <p className="text-left text-teal"><b>{item['de']}</b></p>}
                                <p className="text-justify text-indent-15">{item['mensagem']}</p>
                                <br />
                            </div>
                })} */}


                <FirestoreCollection path="/mensagens">
                    {d=> {
                        if(d.isLoading) return <p className="text-red"><b>Carregando...</b></p>
                        if(d.value != null){
                            return d.value.map((valor, chave) => {
                               
                                if(valor['de'] == props.idUsuario){
                                    return (
                                        <div>
                                            <p className="text-left text-eggplant">
                                                <FirestoreCollection path="/contatos">
                                                    {data => {
                                                        if(data.value.lenght > 0){
                                                            return data.value.map((v, indice) => {
                                                                console.error('De alguém:', v);
                                                                if(v['idUsuario'] == valor['de']){
                                                                    return <span>{v['nome']}</span>
                                                                }
                                                            })
                                                        }
                                                    }}
                                                </FirestoreCollection>
                                                
                                                {valor['de']}
                                                
                                                </p>
                                            <p className="text-justify text-indent">{valor['mensagem']}</p>
                                        </div>
                                    )
                                    
                                }
                                if(valor['de'] != props.idUsuario){
                                    return (
                                        <div>
                                            <p className="text-right text-teal">
                                            <FirestoreCollection path="/contatos">
                                                    {data => {
                                                        if(data.value.lenght > 0){
                                                            return data.value.map((v, indice) => {
                                                                console.error('De alguém:', v);
                                                                if(v['idUsuario'] == valor['de']){
                                                                    return <span>{v['nome']}</span>
                                                                }
                                                            })
                                                        }
                                                    }}
                                                </FirestoreCollection>
                                                {valor['de']}
                                                </p>
                                            <p className="text-justify text-indent">{valor['mensagem']}</p>
                                        </div>
                                    )
                                }
                                if(valor['para'] == props.idCliente){
                                    return (
                                        <div>
                                            <p className="text-left text-eggplant">
                                            <FirestoreCollection path="/contatos">
                                                    {data => {
                                                        if(data.value.lenght > 0){
                                                            return data.value.map((v, indice) => {
                                                                console.error('De alguém:', v);
                                                                if(v['idUsuario'] == valor['de']){
                                                                    return <span>{v['nome']}</span>
                                                                }
                                                            })
                                                        }
                                                    }}
                                                </FirestoreCollection>
                                                {valor['de']}
                                                </p>
                                            <p className="text-justify text-indent">{valor['mensagem']}</p>
                                        </div>
                                    )
                                }
                                if(valor['para'] != props.idCliente){
                                    return (
                                        <div>
                                            <p className="text-right text-teal">
                                            <FirestoreCollection path="/contatos">
                                                    {data => {
                                                        if(data.value.lenght > 0){
                                                            return data.value.map((v, indice) => {
                                                                console.error('De alguém:', v);
                                                                if(v['idUsuario'] == valor['de']){
                                                                    return <span>{v['nome']}</span>
                                                                }
                                                            })
                                                        }
                                                    }}
                                                </FirestoreCollection>
                                                {valor['de']}</p>
                                            <p className="text-justify text-indent">{valor['mensagem']}</p>
                                        </div>
                                    )
                                }                               
                                
                            });     
                        }
                    }}
                </FirestoreCollection>

            </div>
            <div className="row sticky-bottom padding-5 card-mensagem  raisin-black">
                <input type="hidden" value={props.idCliente} id="email" />
                <input type="hidden" value={props.idUsuario} id="idUsuario" />
                <input type="text" id="mensagem" placeholder="Enivar mensagem" className="white input  border-bottom-eggplant-focus col-10" />
                <FirestoreMutation path="/mensagens" type="add">
                    {({runMutation})=>{
                        return  <button className="btn eggplant col-2" onClick={()=>{
                            
                            let mensagem = {
                                de: document.querySelector("#idUsuario").value,
                                para: document.querySelector("#email").value,
                                mensagem: document.querySelector("#mensagem").value
                            }
                            runMutation(mensagem).then(res => {
                                console.log(mensagem);
                                console.log(res);
                            }).catch(erro => {
                                alert('Erro ao mandar mensagem!')
                                alert(erro.message)
                            })
                        }}>
                            <span className="hide-on-mobile">Enviar </span>
                            <FontAwesomeIcon icon={faShare} />
                        </button>
                    }}
                </FirestoreMutation>
                </div>
            </div>;
}

export default ListarUm;