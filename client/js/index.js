import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import EnglishInput from './components/EnglishInput';
import LegalDefinition from './components/LegalDefinition';
import Main from './components/Main';


document.addEventListener("DOMContentLoaded", function(event) {
ReactDOM.render(<Main/>,
	document.getElementById('app')

	);	

  });

console.log(`Client running in ${process.env.NODE_ENV} mode`);
