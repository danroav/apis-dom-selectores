import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div id="div_name">
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div id ="abc" class="clasediv">
</div>
<div clases="otraclase">
</div>
`;

/*
Grupo 1 – Selectores: Selectores del DOM
	El gran libro de HTML, CSS3 y JavaScript: Cap 2.3 Referencias, Cap 2.6, Cap 4.3, Cap 4.7)
	Ejemplo por tipo de referencias, usar el HTML de cualquier página.
	Pregunta para Cuestionario.
*/
/*Integranates

Renato Francachs
Ivan Emmanuel Figueroa
Mauricio Aramayo Vidaurre
Abad Neftali Beniz Sossa
Carlos Arce
Micheal Titizano
Jhon rodrigo Acuña colque

PREGUNTA
El uso de «selectores» en JavaScript permite encontrar y 
seleccionar elementos del DOM bien sea para extraer 
información de cada nodo o para manipularlos de ser necesario.

Verdadero
Falso

*/
var divEncontrado = document.getElementById("abc");

var valor = document.getElementById("#idSelecionada");

var div = document.getElementById("div_name");
div.classList.add("mi_clase");
console.log(div);

var elemento = documento.querySelector(".clasediv");
var miclase = document.querySelectorAll("div");
var divespecifico = documento.querySelector("div.clasediv h1");
console.log(miclase);
