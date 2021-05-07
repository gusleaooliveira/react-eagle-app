import { faBackward, faChevronLeft, faDove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconeUsuario from './IconeUsuario'
import eagle from '../eagle.svg'
import { Link } from 'react-router-dom';

function Cabecalho(props){
    return <div className="padding-10 raisin-black row sticky-top">
                <IconeUsuario tipo="login" />

                {props.path != undefined && <Link to={props.path} className="btn col-1">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>}

                {props.titulo != undefined && <h1 className="text-xlarge col-9 margin-left-5"> {props.titulo}</h1>}
                {props.titulo == undefined && <h1 className="text-xlarge col-9 margin-left-5"> Eagle Chat</h1>}
                
                <IconeUsuario icone={eagle} />               
            </div>
}

export default Cabecalho 