

export function fetchLegalDefinition (englishWord) {
	const url = new URL ('http://localhost:8080/words');

	return fetch(url, buildQuery({englishWord}).then(response => {
		return response.json();
	}).then(legalDefinition => {
		console.log(legalDefinition);

		//dispatch synchronous action when completed 
	})

}