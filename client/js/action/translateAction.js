

export function fetchLegalDefinition (englishWord) {
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

		//dispatch synchronous action when completed 
	})

}