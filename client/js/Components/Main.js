import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../action/translateAction';
import Button from './Button';
import EnglishInput from './EnglishInput';
import {LegalDefinition} from './LegalDefinition';

var value = '';
 class Main extends React.Component{

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    //Dispatch call to async action to convert into definition
    onClick(event,props){
        event.preventDefault();

        value = document.getElementById('english').value;
        this.props.dispatch(actions.fetchLegalDefinition(value));
        return value
    }


    render(props){
        return(
	 	    <div>
                <h1>Legal Word Translator: Get the legal definition about the word you want</h1>
                <form action="#">
                    <EnglishInput id="english"/>
                    <Button onClick={this.onClick}/>
                </form>
                <LegalDefinition word={this.props.Word} synonyms={this.props.synonyms} legalDefinition = {this.props.legalDefinition} />
	 	    </div>
	 	);
    }
}
//Connect store to props

function mapStateToProps (state, props) {
    return {

        legalDefinition:state.legalDefinition,
        Word:state.Word,
        synonyms:state.synonyms
    }

}




export default connect(mapStateToProps)(Main);