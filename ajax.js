(() => {
    // paso 1: la instancia
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    
    // paso 2: asignacion evento (readystatechange) mas utilizado en ajax
    // se lanza cuando detecta cualquier cambio de estado (abortado, error, completado...)
    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;
            //console.log(xhr);

        if(xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            //console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })

            $xhr.appendChild($fragment);
        } else {
            //console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        // sea exitosa la peticion o no:
        //console.log("Este mensaje cargara de cualquier forma");
    });
    
    // paso 3: abrir peticion, establecer el metodo y recurso
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    // paso 4: enviar la peticion
    xhr.send();
})();


(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    //fetch("https://jsonplaceholder.typicode.com/users")
    fetch("csvjson.json")
    /*.then(res => {
        console.log(res);
        return res.ok ? res.json() : Promise.reject(res);
    })*/
    .then((res) => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        //console.log(json);
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.Region} -- ${el.Comuna} -- ${Math.floor(el.Tasa)}`;
            $fragment.appendChild($li);
        })
        $fetch.appendChild($fragment);
    })
    .catch(err => {
        //console.log("Estamos en el Catch", err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => 
        //console.log(
            "Esto se ejecutara independientemente de la promesa Fetch"
    )
    
})();

(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();
            //console.log(res, json);

            //if(!res.ok) throw new Error("Ocurrio un Error al solicitar los datos");
            if(!res.ok) throw { status: res.status, statusText: res.statusText }
            
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
        } catch(err) {
            //console.log("Estoy en el catch", err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {

        }
    }

    getData();



    
})();

(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            //console.log(res);
            let json = res.data;

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $axios.appendChild($fragment);
        })
        .catch(err => {
            //console.log("Estamos en el Catch", err.response);
            $axios.innerHTML = `Error: ${err.response.status} "${err.response.statusText}"`;
        })
        .finally(() => {
            //console.log("Esto se ejecutara independientemente del resultado de Axios");
        });

})();

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    

    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

            json.forEach(el => {
                $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            $axiosAsync.appendChild($fragment);
                 
        } catch(err) {
            $axiosAsync.innerHTML = `Error: ${err.response.status} - ${err.response.statusText}`;
        } finally {
            console.log("Esto se ejecutara independientemente del try... catch");
        }
    }
    getData();
})();