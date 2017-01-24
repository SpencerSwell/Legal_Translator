import * as actions from '../action/translateAction';

const initialState = {
	
legalDefinition:''
};

export default function mainReducer (state = initialState, action) {
	var state = {
		legalDefinition:''
	};

	if(action.type === actions.FETCHED_LEGAL_DEFINITION) {

		state.legalDefinition = action.legalDefinition;

	}
	return state;
}