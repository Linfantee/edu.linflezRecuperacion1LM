var letras = []
var palabra = []
var respuesta = []

function introducirPalabra() {
	palabra = prompt("Introduzca la palabra que deseé");
	respuesta = palabra.split("");
	respuesta.fill("-");
	palabra = palabra.split("");
	letras = []
	enseniarLetras()

}


function pedirLetra() {
	let letra;
	do
		letra = prompt("Introduce una letra")
	while (Number(letra) || letra.length > 1 || enseniarLetras(letra) || letra == "")
	letras.push(letra);
	comprobarLetra(letra);
}
function comprobarLetra(letra) {

	for (i = 0; i < palabra.length; i++) {

		if (palabra[i] == letra) {
			alert("Letra correcta");
			respuesta[i] = letra;


			if (!respuesta.some((valor) => valor == "-"))
				alert("Felicidades has acertado: " + palabra.join(""));
		}
	}
	if (!palabra.some((valor) => valor == letra))
		alert("Letra incorrecta")
}
function enseniarLetras() {
	let palabraCompleta = ""
	respuesta.forEach(function(i) {
		if (i != "-")
			palabraCompleta = palabraCompleta + "<p>" + i + "<p>"
		else
			palabraCompleta = palabraCompleta + "<p>"
	})

	document.getElementById("palabra").innerHTML = (palabraCompleta)
}



