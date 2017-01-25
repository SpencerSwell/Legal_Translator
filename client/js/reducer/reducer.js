import * as actions from '../action/translateAction';

const initialState = {
	
legalDefinition:'asdf'
};

export default function mainReducer (state = initialState, action) {
	

	

	if(action.type === actions.FETCHED_LEGAL_DEFINITION) {
		console.log("REDUCER CALLED");
		state.legalDefinition = action.legalDefinition[0].definitions;
		console.log(action.legalDefinition);
	}
	return state;
}