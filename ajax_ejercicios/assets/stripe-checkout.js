import stripeKeys from "./stripe-keys.js";
import STRIPE_KEYS from "./stripe-keys.js";
//console.log(STRIPE_KEYS);

const d = document,
    $frutos = d.getElementById("frutos"),
    $template = d.getElementById("frutos-template").content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers: {
            Authorization: `Bearer ${STRIPE_KEYS.secret}`
        }
    };

let products, prices;
const moneyFormat = (num) => `$${num}`;

Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions)
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(json => {
    //console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices);

    prices.forEach(el => {
        let productData = products.filter(product => product.id === el.product);
        // console.log(productData);

        const totalData = Object.assign({}, productData, el);
        // console.log(totalData);

        $template.querySelector(".fruto").setAttribute("data-price", el.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
            ${productData[0].name} (${el.nickname})
            <br>
            ${moneyFormat(el.unit_amount)} ${el.currency}
        `;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $frutos.appendChild($fragment);
})
.catch(err => {
    let message = err.statusText || "Ocurrió un error al conectarse con la API de Stripe";
    $frutos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
});

d.addEventListener("click", e => {
    if(e.target.matches(".fruto *")) {
        let priceId = e.target.parentElement.getAttribute("data-price");
        //console.log(priceId);
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems: [{ price: priceId, quantity: 1 }],
            mode: "payment",
            successUrl: "http://127.0.0.1:5500/ajax_ejercicios/assets/stripe-success.html",
            cancelUrl: "http://127.0.0.1:5500/ajax_ejercicios/stripe-checkout.html",
        })
        .then(res => {
            console.log(res)
            if(res.error) {
                $frutos.insertAdjacentHTML("afterend", res.error.message);
            }
        });
    }
});