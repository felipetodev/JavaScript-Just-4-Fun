const d = document;
export default function countDown(id, limitDate, finalMessage) {

    let countDownTempo = setInterval(() => {
        const newYear = new Date(limitDate);
        const actualDate = new Date();

        const remaining = (newYear - actualDate) / 1000;
        const days = Math.floor(remaining / 3600 / 24);
        const hours = Math.floor(remaining / 3600 % 24);
        const minutes = Math.floor(remaining / 60 % 60);
        const seconds = Math.floor(remaining % 60);

        // console.log(days, hours, minutes, seconds);

        const $countDown = d.getElementById(id);

        $countDown.innerHTML = `
        <h2>Faltan: ${formatTime(days)} días 
            ${formatTime(hours)} horas 
            ${formatTime(minutes)} minutos 
            ${formatTime(seconds)} segundos.</h2>
        `;

        if(remaining < 0) {
            clearInterval(countDownTempo);
            $countDown.innerHTML = `<h3>${finalMessage}</h3>`;
        }

    }, 1000);

}

function formatTime(e) {
    return e < 10 ? (`0${e}`) : e;
}
