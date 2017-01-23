import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import EnglishInput from './EnglishInput';
import LegalDefinition from './LegalDefinition';


export  default class Main extends React.Component{

	constructor(props){
	 	super();
	}
     


    render(){

	 	return(
	 	    <div>
                <h1>Legal Word Translator: Get the legal definition about the word you want</h1>
                <form>
                    <EnglishInput/>
                    <Button/>
                </form>
                <LegalDefinition/>
	 	    </div>
	 	);
    }
}
