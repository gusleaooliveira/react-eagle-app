import { faAddressBook, faComment, faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as fire from "firebase/app";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { Link } from 'react-router-dom';

function Menu(props){
    return  <FirebaseAuthConsumer>
            {({isSignedIn, user, providerId})=>{
                if(isSignedIn == true){
                    return <nav className="bar bar-mobile raisin-black padding-5">
                                <Link to="/contatos" className="btn btn-block eggplant">
                                    <span className="hide-on-mobile">Contatos</span>
                                    <FontAwesomeIcon icon={faAddressBook} />
                                </Link>
                                <Link to="/mensagens" className="btn btn-block eggplant">
                                    <span className="hide-on-mobile">Mensagens</span>
                                    <FontAwesomeIcon icon={faComments} />
                                </Link>
                
                             <button to="/logout" className="btn btn-block eggplant" onClick={()=>{
                                    fire.default.auth().signOut();
                                    console.log('Logout');
                                    }}>
                                    <span className="hide-on-mobile">Logout</span>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </button>
                             </nav>
                        }

                    }
                }
                </FirebaseAuthConsumer>
                
}

export default Menu;