import React from 'react';
import usuario  from '../../src/usuario.svg'

function IconeUsuario(props){  
    if(props.tipo == "login"){
        return <div></div>
    }
    if(props.icone == undefined){
        return <img src={usuario} className="icon-large border-circle" />
    }
    else {
        return <img src={props.icone}  className="icon-large border-circle" />
    }
}

export default IconeUsuario;