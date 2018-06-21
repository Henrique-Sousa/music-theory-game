doM = {
	nome: "do maior",
	notas: ["do", "re", "mi", "fa", "sol", "la", "si"]
};

solM = {
	nome: "sol maior",
	notas: ["sol", "la", "si", "do", "re", "mi", "fa#"]
};

faM = {
	nome: "fa maior",
	notas: ["fa", "sol", "la", "sib", "do", "re", "mi", "fa"]
}

reM = {
	nome: "re maior",
	notas: ["re", "mi", "fa#", "sol", "la", "si", "do#"]
}

listaSelecaoDeEscalas = document.getElementById("selecionarEscalas");
doMBox = listaSelecaoDeEscalas.childNodes[1].firstChild
solMBox = listaSelecaoDeEscalas.childNodes[3].firstChild
faMBox = listaSelecaoDeEscalas.childNodes[5].firstChild
reMBox = listaSelecaoDeEscalas.childNodes[7].firstChild
//colcoar as outras escalas

var escalasSelecionadas = [];
var n = 0;

var acertos = 0;
var erros = 0;


function comparar(){
	//sera que as chamadas de funcao estao aninhando uma dentro da outra como em recursao e criando uma grande stack de funcoes iguais?

	resposta = respostaCampo.value; //como ele consegue 'ver' essa variavel respostaCampo se o escopo dela eh da funcao jogar?
	// lidar com a resposta do usuario. ex. se digitar fa sustenido, mudar pra fa#. usar switch case
	if (resposta === notaSorteada){
		/*alert("certo");*/ //mudar pra document.body.innerHTML = ... ?
		acertos++;
		jogar();
	} else if (resposta === "") {
		alert("digite algo, ne");
	//colcoar: se colocar algo que nao eh uma nota, dizer que nao eh. tudo isso vai pro switch case acima
	} else {
/*		respostaCampo.style.background = "red";
*/		alert("errado!"); //mudar pra document.body.innerHTML = ... ?
		erros++;
		jogar();
	}
}


function parar(){
	questoes = acertos + erros;
	if (acertos === 1) stringAcertos = "acerto";
	else stringAcertos = "acertos";
	document.body.innerHTML = 
	"<h1> Resultado </h1>" + "<h2>" + String(acertos) + " " + stringAcertos + " de " + String(questoes) + "</h2>"
	+ "<input type='button' value='Recomeçar' onclick='location.reload();'>";
}



function jogar(){
	numeroSorteioEscala = Math.floor(n*Math.random());
	escalaSorteada = escalasSelecionadas[numeroSorteioEscala];
	numeroSorteioNota = Math.floor(7*Math.random());
	notaSorteada = escalaSorteada.notas[numeroSorteioNota]
	document.body.innerHTML = 
	"<h1>Escala: " + escalaSorteada.nome + "</h1>" 
	+ "<h2>Grau: " + String(numeroSorteioNota + 1) + "</h2>" 
	+ "<input type='text' id='respostaCampo' onkeydown='if (event.keyCode == 13) comparar();' autofocus>" 
	+ "<input type='button' value='Enviar' onclick='comparar();'>"
	+ "<br> <input type=button value='Parar' onclick='parar();'>"; //colocar esc pra parar?
	respostaCampo = document.getElementById("respostaCampo");
	// respostaCampo.setAttribute("autofocus", "true"); 	//autofocus nao ta permanecendo
	// document.body.innerHTML +=   
	// "</br> <input type='button' value='C' onclick=comparar('do');>"
	// + "<input type='button' value='C#'>"
	// + "<input type='button' value='D'>"
	// + "<input type='button' value='D#'>"
	// + "<input type='button' value='E'>"
	// + "<input type='button' value='F'>"
	// + "<input type='button' value='F#'>"
	// + "<input type='button' value='G'>"
	// + "<input type='button' value='G#'>"
	// + "<input type='button' value='A'>"
	// + "<input type='button' value='A#'>"
	// + "<input type='button' value='B'>"
	return;
}


function comecar(){

	if (doMBox.checked) escalasSelecionadas.push(doM);
	if (solMBox.checked) escalasSelecionadas.push(solM);
	if (faMBox.checked) escalasSelecionadas.push(faM);
	if (reMBox.checked) escalasSelecionadas.push(reM);

	n = escalasSelecionadas.length;

	jogar();
}