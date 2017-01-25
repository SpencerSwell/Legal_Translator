import * as actions from '../action/translateAction';

const initialState = {
synonyms:'',
legalDefinition:'',
Word:''
};

export default function mainReducer (state = initialState, action) {
	

	

	if(action.type === actions.FETCHED_LEGAL_DEFINITION) {
		console.log("REDUCER CALLED");
		if(action.legalDefinition.length === 0) {

			return Object.assign({}, state, {legalDefinition:"Try another word"});
		};
		
		return Object.assign({}, state, {legalDefinition:action.legalDefinition[0].definitions, Word:action.Word, synonyms:action.legalDefinition[0].word_synoyms})
		console.log(action.legalDefinition);
	}
	return state;
}