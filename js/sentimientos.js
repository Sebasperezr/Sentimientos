

async function query(data) {

	const API_TOKEN = "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"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/pysentimiento/robertuito-sentiment-analysis",
		{
			headers: { Authorization: "Bearer " + API_TOKEN },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}



const procesar = () => {
	let text = document.getElementById("textP").value

	query(text).then((response) => {
		response[0].forEach(element => {

			let aux = document.getElementById(element.label);
			if (aux != null)
				aux.remove()

			let bar = document.createElement("div")
			bar.id = element.label;
			bar.innerHTML = '   <div class="row">'
				+ '<div class="col-3">'
				+ '<label for="textP" class="form-label">' + element.label + '</label>'
				+ '</div>'
				+ '<div class="col-9 mt-1">'
				+ '<div class="progress">'
				+ '<div class="progress-bar" role = "progressbar" id = "positivo"'
				+ 'style = "width: ' + element.score * 100 + '%; background-color: green;" aria - valuemin="0" aria - valuemax="100" >'
				+ (element.score * 100).toFixed(2) + ' %'
				+ '		</ >'
				+ '	</div >'
				+ '</div >'
				+ '</div > ';
			document.getElementById("progresBars").appendChild(bar);

		});
	});

}