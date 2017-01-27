import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as actions from './action/translateAction';
import Main from './components/Main';
import store from './store';

document.addEventListener("DOMContentLoaded", function(event) {
ReactDOM.render(
	<Provider store= {store}>
		<Main/>
	</Provider>,
	
	document.getElementById('app')
	);	

  });

console.log(`Client running in ${process.env.NODE_ENV} mode`);
