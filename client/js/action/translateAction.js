


	export const FETCHED_LEGAL_DEFINITION = "FETCHED_LEGAL_DEFINITION";

	export function fetchedLegalDefinition (legalDefinition, Word) {
		return {
			type:FETCHED_LEGAL_DEFINITION,
			legalDefinition:legalDefinition,
			Word:Word
		}

	}

export  function fetchLegalDefinition (englishWord) {
	return function (dispatch) {

		const url = new URL ('http://localhost:8080/translate/'+ englishWord);

		return fetch(url).then(response => {
			// if (response.status < 200 || response.status >= 300) {
			// 		let error = new Error(response.statusText);
			// 		error.response = response;
			// 		throw error;
			// 	}
			return response.json();
		}).then(legalDefinition => {
			console.log(legalDefinition);
			return dispatch(fetchedLegalDefinition(legalDefinition,englishWord));
			//dispatch synchronous action when completed 
		})
	}
}

module.exports = {FETCHED_LEGAL_DEFINITION, fetchedLegalDefinition, fetchLegalDefinition};