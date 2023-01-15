import React from 'react';
import './styles/navbar.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div id={"nav"}>
                <img src={"logo192.png"} alt="Logo"/>
                <form id={'search'}
                >
                    <label>
                        Szukaj:
                        <input type="search" name="query"/>
                    </label>
                </form>
                    <Link to='/Login' style={{ textDecoration: 'none' }}> <Button>
                        <button id={'login'}
                        >Zaloguj się
                        </button> </Button></Link>
            </div>
        </nav>
    );
}

export default Navbar;
