export const FETCHED_LEGAL_DEFINITION = "FETCHED_LEGAL_DEFINITION";
	export function fetchedLegalDefinition(legalDefinition, Word) {
		return {
			type:FETCHED_LEGAL_DEFINITION,
			legalDefinition:legalDefinition,
			Word:Word,
			synonyms:legalDefinition.word_synonyms
		}
	};
	
//dispatch synchronous action when completed
export function fetchLegalDefinition(englishWord) {
	return function(dispatch) {
	const url = '/translate/'+ englishWord;

	return fetch(url).then(response => {
			
			return response.json();
		}).then(legalDefinition => {
			return dispatch(fetchedLegalDefinition(legalDefinition,englishWord));
			 
		})
	}
}

module.exports = {FETCHED_LEGAL_DEFINITION, fetchedLegalDefinition, fetchLegalDefinition};