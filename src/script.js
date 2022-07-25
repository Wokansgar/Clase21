
/*Algunos de los elementos más comunes: 
    document.getElementById
    document.getElementsByClassName
    document.getElementsByTagName
*/

/*const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
paragraphs [0].innerText= "Javascript ha cambiado Esto."
console.log(paragraphs);//document.querySelectorAll("p")

let secondLi = document.getElementById ("secondElementLi");
console.log(secondLi);
secondLi.innerText = "Elemento cambiado";//document.querySelector(".p")

const classEspecialElements = document.getElementsByClassName("especialClass");
console.log (classEspecialElements); //document.querySelector("#p")
console.log (classEspecialElements[1]);
*/

/*let liHtmlElement = document.createElement("li");
const textNodeForLi = document.createTextNode("Elemento Nuevo");
liHtmlElement.appendChild(textNodeForLi);
const lista = document.getElementById("listaModificable");
lista.appendChild(liHtmlElement);

document.createElement("li").*/
//document.getElementById("listaModificable").appendChild(document.createElement("Elemento Nuevo"));
function eliminaLista() {
    document.getElementById("listaModificable").remove();   
}
function cambiaFuenteBody() {
    document.body.classList.add("fuente")    
}
function changeColorLink() {
   document.a.classList.add("linkColor")
}

//Eventos en JS:
document.getElementById("botonQueEliminaLista").addEventListener("click",eliminaLista);

document.getElementById("botonCambiarFuenteBody").addEventListener("click",cambiaFuenteBody);

document.getElementById("addLinkChange").addEventListener("click",changeColorLink);





