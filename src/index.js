import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.scss';
import Card from './Card/Card.scss';
import Cart from './Cart/Cart.scss';
import * as serviceWorker from './serviceWorker';

import '@fortawesome/fontawesome-free/css/all.min.css'; 


ReactDOM.render(
    <div>
        <Header/>
        <div clas='body' >
            <div class='cartbody'>
                <Cart/>
            </div>
            <div class='allproducts'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
    ,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
