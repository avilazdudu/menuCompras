let cart = document.getElementById("cart")
let btnOpen = document.getElementById("open")
let btnClose = document.getElementById("close") 

function openCart(){ // Show the cart
    cart.style.visibility = "visible";
    cart.style.animation = "slideIn 1s forwards"
    btnOpen.style.animation = "slideInBtn 1s forwards"
}
function closeCart(){ // Hide the cart
    cart.style.animation = "slideOut 1s forwards";
    btnOpen.style.animation = "slideOutBtn 1s forwards"
    setTimeout(() => {
        cart.style.visibility = "hidden";
    }, 1000);
}


btnOpen.addEventListener("click", openCart) // Open the cart when the button is clicked
btnClose.addEventListener("click", closeCart) // Close the cart when the button is clicked

const valorOuro = document.getElementById('valueQuantityOuroBranco');
const botaoMaisOuro = document.getElementById('maisOuro'); 
const botaoMenosOuro = document.getElementById('menosOuro');

const valorNovoOuro = () => {
    valorOuro.innerHTML = numeroOuro;
}
let numeroOuro = 0;
let quantidadeOuro = 0;

botaoMaisOuro.addEventListener('click', () => {
    numeroOuro += 1;
    valorNovoOuro();
    quantidadeOuro += 1;
});

botaoMenosOuro.addEventListener('click', () => {
    if (numeroOuro > 0) {
        numeroOuro -= 1;
        valorNovoOuro();
    };
    if (quantidadeOuro > 0) {
        quantidadeOuro -= 1;
    }
    globalThis.quantidadeOuro = quantidadeOuro;
});

const valorSonho = document.getElementById('valueQuantitySonhoDeValsa');
const botaoMaisSonho = document.getElementById('maisSonho');
const botaoMenosSonho = document.getElementById('menosSonho');

const valorNovoSonho = () => {
    valorSonho.innerHTML = numeroSonho;
}

let numeroSonho = 0;
let quantidadeSonho = 0;

botaoMaisSonho.addEventListener('click', () => {
    numeroSonho += 1;
    valorNovoSonho();
    quantidadeSonho += 1;
});

botaoMenosSonho.addEventListener('click', () => {
    if (numeroSonho > 0) {
        numeroSonho -= 1;
        valorNovoSonho();
    }
    if (quantidadeSonho > 0) {
        quantidadeSonho -= 1;
    }
});

const valorFerrero = document.getElementById('valueQuantityFerreroCollection');
const botaoMaisFerrero = document.getElementById('maisFerrero');
const botaoMenosFerrero = document.getElementById('menosFerrero');

const valorNovoFerrero = () => {
    valorFerrero.innerHTML = numeroFerrero;
}

let numeroFerrero = 0;
let quantidadeFerrero = 0;

botaoMaisFerrero.addEventListener('click', () => {
    numeroFerrero += 1;
    valorNovoFerrero();
    quantidadeFerrero += 1;
});

botaoMenosFerrero.addEventListener('click', () => {
    if (numeroFerrero > 0) {
        numeroFerrero -= 1;
        valorNovoFerrero();
    }
    if (quantidadeFerrero > 0) {
        quantidadeFerrero -= 1;
    }
});     

const produtcs = [
    {
        id: 1,
        name: "Ouro Branco's Easter Egg",
        price: 45.90,
        image: "./img/OuroBranco.png",
        quantity: quantidadeOuro

    },
    {
        id: 2,
        name: "Sonho de Valsa's Easter Egg",
        price: 39.99,
        image: "./img/SonhoDeValsa.png"
    },
    {
        id: 3,
        name: "Ferrero Collection's Easter Egg",
        price: 54.90,
        image: "./img/FerreroRocher.png"
    }
]
console.log(produtcs[1].quantity) // Test to see if the array is working

