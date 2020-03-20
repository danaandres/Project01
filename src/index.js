import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Card.css';
import './Header.css';
import './Cart.css';
import Header from './Header';
import Card from './Card';
import Cart from './Cart';
import * as serviceWorker from './serviceWorker';

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
