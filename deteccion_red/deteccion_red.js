const d = document,
    w = window,
    n = navigator;
    


export default function redStatus() {
    const isOnline = () => {
        const $div = d.createElement("div");
        
        if(n.onLine) {
            $div.textContent = "Conexión Establecida 👌";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexión Interrumpida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => d.body.removeChild($div), 4000);
    }

    w.addEventListener("online", (e) => isOnline());
    w.addEventListener("offline", (e) => isOnline());

    
}