/*
const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileCountent, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if(e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileCountent;
        }
    }
    
    breakpoint.addListener(responsive)
    responsive(breakpoint);
    
    //console.log(breakpoint);

}
*/