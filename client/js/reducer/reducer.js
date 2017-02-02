import * as actions from '../action/translateAction';

const initialState = {
	synonyms:`Abode, Fellow, Aggression, Business Trust, Resident`,

	legalDefinition:`House, Person, Assault, Corporation, Citizen`,
	Word:`Words availible Now:`
};

export default function mainReducer (state = initialState, action) {
	
	if(action.type === actions.FETCHED_LEGAL_DEFINITION) {
		console.log(action.legalDefinition[0]);
		if(action.legalDefinition.length === 0) {
			return Object.assign({}, state, {legalDefinition:"Try another word"});
		};
		
		return Object.assign({}, state, {legalDefinition:action.legalDefinition[0].definition,
		 Word:action.Word.toUpperCase(), synonyms:action.legalDefinition[0].synonyms})
		}
	return state;
}