import { faAddressBook, faComment, faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link} from 'react-router-dom'

function Menu(props){
    return  <nav className="bar bar-mobile raisin-black padding-5">
                <Link to="/contatos" className="btn btn-block eggplant">
                    <span className="hide-on-mobile">Contatos</span>
                    <FontAwesomeIcon icon={faAddressBook} />
                </Link>
                <Link to="/mensagens" className="btn btn-block eggplant">
                    <span className="hide-on-mobile">Mensagens</span>
                    <FontAwesomeIcon icon={faComments} />
                </Link>
                <Link to="/logout" className="btn btn-block eggplant">
                    <span className="hide-on-mobile">Logout</span>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
            </nav>
}

export default Menu;