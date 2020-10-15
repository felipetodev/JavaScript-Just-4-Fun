//'use strict'
//PROXIES
/*
const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(obj, prop, valor) {
        if(Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad "${prop}", no existe en el objeto persona.`);
        }
        obj[prop] = valor;
    }
}

const jon = new Proxy(persona, manejador);
    jon.nombre = "Jon";
    jon.apellido = "Mircha";
    jon.edad = 35;
    jon.twitter = "@jonmircha";

console.log(jon);

console.log(persona);
*/





//PROpIEdADES DINAMICAS

/*
const objUsuarios = {}
const usuarios = ["Jon", "Irma", "Miguel", "Kala", "Felipe"];

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios);
*/


//THIS

//this.nombre = "Contexto Global";




//JSON


function ham (".panelBtn", "panel", "navLink") {
    document.addEventListener("click", e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            document.querySelector(panel).classList.toggle("is-active");
            document.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(navLink)){
            document.querySelector(panel).classList.remove("is-active");
            document.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    ham(".panel-btn", ".panel", ".nav a");
})