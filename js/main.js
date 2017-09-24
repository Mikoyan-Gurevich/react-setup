import './notSoMain';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('This logging means that main.js file has been included');


const reactElement = (
    <div>This is the first div that will be displayed on the screen.</div>
);

ReactDOM.render(reactElement, document.getElementById('app'));