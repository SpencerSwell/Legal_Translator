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

    onClick(event,props) {
        
        event.preventDefault();

         value = document.getElementById('english').value;
        console.log(actions.fetchLegalDefinition);
        this.props.dispatch(actions.fetchLegalDefinition(value));
        return value;
    }


    render(props){
        

	 	return(
	 	    <div>
                <h1>Legal Word Translator: Get the legal definition about the word you want</h1>
                <form action="#">
                    <EnglishInput id="english"/>
                    <Button onClick={this.onClick}/>
                </form>
                <LegalDefinition content={this.props.legalDefintion}/>
	 	    </div>
	 	);
    }
}
var fuckIt;
function mapStateToProps (state, props) {
   
    return {

        legalDefintion:state.legalDefintion
    }
}

console.log(fuckIt);
export default connect(mapStateToProps)(Main);