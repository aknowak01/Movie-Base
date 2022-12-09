import React from 'react';
import './styles/navbar.css';

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
                <button id={'login'}
                >Zaloguj się
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
