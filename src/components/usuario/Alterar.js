import React from 'react';
import * fire from 'firebase/app';
import { useState } from 'react/cjs/react.development';

function Alterar(props){
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [foto, setFoto] = useState('');

    return <button onClick={()=>{
                const googleAuthProvider = new fire.default.auth.GoogleAuthProvider();
                let user = fire.default.auth().currentUser;
                user.updateProfile({
                    displayName: nome,
                    photoURL: foto,
                    email: email,
                    phoneNumber: telefone
                }).then(() =>{
                    alert('Alterou o usuário!')
                }).catch((error) => {
                    alert(error.message)
                })
            }}>
                Salvar
            </button>
}

export default Alterar;