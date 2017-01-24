import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import EnglishInput from './EnglishInput';
import LegalDefinition from './LegalDefinition';
import * as actions from '../action/translateAction';


export  default class Main extends React.Component{

	constructor(props){
	 	super(props);

        this.onClick = this.onClick.bind(this);

	}

    onClick(event,props) {
        event.preventDefault();

        console.log("OnSubmit called");
        var value = document.getElementById('english').value;
        console.log(actions);
        props.dispatch(actions.fetchLegalDefinition(value))
    }


    render(){

	 	return(
	 	    <div>
                <h1>Legal Word Translator: Get the legal definition about the word you want</h1>
                <form action="#">
                    <EnglishInput id="english"/>
                    <Button onClick={this.onClick}/>
                </form>
                <LegalDefinition/>
	 	    </div>
	 	);
    }
}
