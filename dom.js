
//console.log(document.getElementsByTagName("li"));
//console.log(document.getElementsByClassName("card"));
//console.log(document.getElementsByName("nombre"));
//console.log(document.getElementById("menu"));
//console.log(document.querySelector("#menu"));
//console.log(document.querySelectorAll("a"));
//console.log(document.querySelectorAll("a").length);
//document.querySelectorAll("a").forEach((el)=> console.log(el));


/*

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.google.cl");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete y comparte"
console.log($linkDOM.dataset.description);

*/

/*

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "0.5rem";

//Variables CSS

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

    console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","black");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);

*/

/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
*/


// DOM Traversing ----> Recorriendo el DOM <----



/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); // Referencia a sus 'hijos'
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.parentNode);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

console.log($cards.children[3].closest("section"));*/




// DOM: Creando Elementos y Fragmentos

/*
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

    
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText); 
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

    document.write("<h3>Estaciones del Año</h3>");
    document.body.appendChild($ul);

    estaciones.forEach(el => {
        const $li = document.createElement("li");
        $li.textContent = el;
        $ul.appendChild($li);
    });


const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

    document.write("<h3>Continentes del Mundo</h3>");
    document.body.appendChild($ul2);
    $ul2.innerHTML = "";
    continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
], 
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

*/




// Templates HTML     <<<<<<<<<<<<<<<<<<<<<<<<<

/*
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    },
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
*/


// Modificando Elementos (old style)           <<<<<<<<<<<<<<<


/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

// $cards.replaceChild($newCard,$cards.children[2]);
// $cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);

document.body.appendChild($cloneCards);
*/


// Modificando Elementos (NEW METHOD)    <<<<<<<<<<<<<


/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
// $cards.insertAdjacentElement('afterbegin', $newCard);

// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
$cards.after($newCard); */



// Manejadores de Eventos <<<<<<<<<<<<<<<<<<<<<<<<<<<


/*
function holaMundo () {
    alert("Hola Mundo");
    console.log(event);
}

function saludar (nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");


$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
    alert("Hola Mundo, manejador de Eventos Semantico");
    console.log(e);
    console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Multiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
}); 

$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Felipe");
});

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
*/





// Flujo de Eventos    <<<<<<


/*

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click", e => {
    console.log("Click en", e.target);

    if(e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
        alert("Hola soy tu amigo Felipe... Ossandon");
        e.preventDefault();
    }
});

*/






// BOM: Propiedades y Eventos   <<<<<<<<<<<<



/*
window.addEventListener("resize", e => {
    console.clear();
    console.log("Evento Resize >>>>>>>>>");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", e => {
    console.clear();
    console.log("Evento Scroll >>>>>>>>");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


window.addEventListener("load", e => {
    console.log("Evento Load >>>>>>>>");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded", e => {
    console.log("Evento DOM CONTENT LOADED >>>>>>>>");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})*/




// BOM: Metodos    <<<<<<<<<<<<



/*
const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = open("https://google.com");
});

$btnCerrar.addEventListener("click", e => {
    //close();
    ventana.close();
});

$btnImprimir.addEventListener("click", e => {
    print();
});
*/






// BOM: Objetos - URL, HISTORIAL Y NAVEGADOR


/*
console.log(">>>>>> Objeto URL (location) <<<<<<<<<");
console.log(location);
*/

console.clear();

const $cards = document.querySelector(".cards"), 
    $figure = document.createElement("figure");

$figure.innerHTML = `
    <img src="https://placeimg.com/200/200/nature" alt="Nature-2">
    <figcaption>Nature</figcaption>
`;

$figure.classList.add("card");
$cards.appendChild($figure);


const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write(`<h3>Estaciones del año</h3>`);

document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})

const continentes = ["Africa", "America", "Europa", "Asia", "Oceania"],
    $ul2 = document.createElement("ul");

document.write(`<h3>Contienentes del Mundo</h3>`);
document.body.appendChild($ul2);
$ul2.classList.add("lista");

//$ul2.innerHTML = "";
continentes.forEach((el) => $ul2.innerHTML += `<li><a href="#">${el}</a></li>`);


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment()

meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
$ul3.classList.add("productos");
document.body.appendChild($ul3);