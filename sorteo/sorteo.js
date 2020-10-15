const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];

        //console.log($players, random, winner);

        return `El ganador es >>>>>>> ${winner.textContent}!!!`;
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    })
}

/* ----------- CARROUSEL --------- 

const id = d.getElementById("seccion12");
const ul = d.createElement("ul");

const insert_ul = id.appendChild(ul);

insert_ul.innerHTML = `
    <li class="carousel"><img src="https://images.unsplash.com/photo-1600466934835-6c2f90c9d10a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" alt="cat"></li>
    <li class="carousel"><img src="https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="study"></li>
    <li class="carousel"><img src="https://images.unsplash.com/photo-1492544660250-a20e679019e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="fruit"></li>
    <li class="carousel"><img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80" alt="cat2"></li>
`;

*/