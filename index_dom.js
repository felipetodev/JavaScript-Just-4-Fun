import hamburgerMenu from "./menu-hamburguesa/menu-hamburguesa.js";
import { digitalClock, alarm } from './reloj/reloj.js';
import countDown from './cuenta_regresiva/cuenta_regresiva.js';
import darkTheme from "./darkmode/darkmode.js";
//import responsiveMedia from "./objeto_responsive/objeto_responsive.js";
import responsiveTester from "./responsive_test/responsive_test.js";
import userDeviceInfo from "./deteccion_dispositivos/deteccion_disp.js";
import redStatus from "./deteccion_red/deteccion_red.js";
import webcam from "./deteccion_webcam/deteccion_webcam.js";
import getGeolotacion from "./deteccion_geolocaliza/deteccion_geo.js";
import searchFilters from "./filtros_busqueda/filtros_busqueda.js";
import draw from "./sorteo/sorteo.js";
import scrollSpy from "./scrollspy/scrollspy.js";
import smartVideo from "./video_inteligente/video_inteligente.js";
import contactFormValidations from "./formulario/validaciones.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("reloj/iphone_alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countdown", "01 Jan 2021", "¡ Feliz Año nuevo !");
    //responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://youtu.be/QNk3WX33SGc">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/QNk3WX33SGc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    //responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://goo.gl/maps/pFopqqGLjAS8b6uo8">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13321.27209596105!2d-70.60150236857733!3d-33.4149521925438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf3c12fb1f71%3A0xf6aadd9ced89cc0!2sBarrio%20El%20Golf%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sus!4v1600716730367!5m2!1ses-419!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webcam("webcam");
    getGeolotacion("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

darkTheme(".dark-theme-btn", "dark-mode");
redStatus();
