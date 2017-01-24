import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../action/translateAction';
import Button from './Button';
import EnglishInput from './EnglishInput';
import {LegalDefinition} from './LegalDefinition';


export default class Main extends React.Component{

	constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);

	}

    onClick(event,props) {
        
        event.preventDefault();

        var value = document.getElementById('english').value;
        console.log(actions.fetchLegalDefinition);
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

