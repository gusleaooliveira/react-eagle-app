import { faDove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Cabecalho(props){
    return <div className="padding-10 raisin-black row sticky-top">
                <IconeUsuario icone={props.icone} />
                <h1 className="text-xlarge col-10 margin-left-5"> Nome do usuário</h1>
                <FontAwesomeIcon icon={faDove} className="text-xlarge col-1" />
            </div>
}

export default Cabecalho 