import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/button';
import EnglishInput from './components/EnglishInput';


document.addEventListener("DOMContentLoaded", function(event) {
ReactDOM.render(<EnglishInput/>,
	document.getElementById('app')

	);	

  });

console.log(`Client running in ${process.env.NODE_ENV} mode`);
