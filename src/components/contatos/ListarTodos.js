import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faShare } from '@fortawesome/free-solid-svg-icons';
import IconeUsuario from '../IconeUsuario';
import Cabecalho from '../Cabecalho';
import { Link } from 'react-router-dom';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { FirestoreCollection } from '@react-firebase/firestore';

function ListarTodos(props){
    const [usr, setUsr] = useState('');
    
    useEffect(()=>{
        console.log('Id usr:',usr);
    })

    return  <div>
            <Cabecalho />
            <div className="padding-10 display-container">
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
                            return d.value.map((valor, indice) => {
                                console.error('Verificacao: ',valor['idUsuario'] == usr);
                                if(valor['idUsuario'] == usr){
                                    return (
                                    <Link to={"/contatos/"+usr} className="btn btn-block btn-left eggplant margin-top-5">
                                        <div className="row">
                                            <IconeUsuario icone={valor['icone']} />
                                            <div className="column column-center margin-left-5">
                                                <p className="text-left"><b>{valor['nome']}</b></p>
                                            </div>
                                        </div>
                                    </Link>
                                    )
                                }
                            })
                        }
                    }}
                </FirestoreCollection>

       
            </div>
            </div>;
}

export default ListarTodos;