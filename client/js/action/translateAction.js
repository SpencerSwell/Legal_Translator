
	export const FETCHED_LEGAL_DEFINITION = "FETCHED_LEGAL_DEFINITION";

	export function fetchedLegalDefinition (legalDefinition) {
		type:FETCHED_LEGAL_DEFINITION,
		legalDefinition

	}


export const fetchLegalDefinition = englishWord => dispatch => {
//	var myRequest = new Request('http://localhost:8081/fewest-guesses', {method: 'POST', body: {"guessCount":"\""+ guessNumber+"\""}});
	const url = new URL ('http://localhost:8080/translate/'+ englishWord);


	return fetch(url).then(response => {

		return response.json();
	}).then(legalDefinition => {
		console.log(legalDefinition);
		return actions.dispatch(fetchedLegalDefinition(legalDefinition));
	})

}


module.exports = {FETCHED_LEGAL_DEFINITION, fetchedLegalDefinition, fetchLegalDefinition};