const d = document,
    n = navigator;

export default function getGeolotacion(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

    const success = position => {
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = `
        <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: ${coords.latitude}</li>
                <li>Longitud: ${coords.longitude}</li>
                <li>Precisión: ${coords.accuracy} metros</li>
            </ul>
        <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 17z" target="_blank" rel="noopener">Ver en Google Maps<a/>
        `;
    }

    const error = err => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(err);
    }

    n.geolocation.getCurrentPosition(success, error, options);
}