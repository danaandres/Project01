import { } from 'react-flexbox-grid';
import React from 'react';
import './Header/Header.scss';


const Header = () => {
    return (
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-sm-2'>
                    <img alt='logo' src=''></img>
                </div>
                <div class='col-sm-10'>
                    <button>Home</button>
                    <button>About</button>
                    <button>Contact</button>
                    <input></input>
                </div>
            </div>
        </div>
    );
}

export default Header;