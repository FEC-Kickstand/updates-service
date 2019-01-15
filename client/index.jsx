/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Updates from './components/app';
import MainNav from './components/mainNav';
import UpdateModal from './components/updateModal';

// window.Updates = Updates;

// document.on('DOMContentLoaded', () => {
// ReactDOM.render(<UpdateModal />, document.getElementById('body'));
ReactDOM.render(<Updates />, document.getElementById('Updates'));
ReactDOM.render(<MainNav />, document.getElementById('MainNav'));
// });
