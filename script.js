const products = [
    {
        name: "Ouro Branco's Easter Egg",
        price: 45.90,
        priceText: "R$ 45.90",
        image: "./img/OuroBranco.png",
        quantity: 0

    },
    {
        name: "Sonho de Valsa's Easter Egg",
        price: 39.99,
        priceText: "R$ 39.99",
        image: "./img/SonhoDeValsa.png",
        quantity: 0
    },
    {
        name: "Ferrero Collection's Easter Egg",
        price: 54.90,
        priceText: "R$ 54.90",
        image: "./img/FerreroRocher.png",
        quantity: 0
    },
    {
        name: "Nestle's Easter Egg",
        price: 44.90,
        priceText: "R$ 44.90",
        image: "./img/Nestle.png",
        quantity: 0
    },
    {
        name: "Lacta's Easter Egg",
        price: 60.99,
        priceText: "R$ 60.99",
        image: "./img/Lacta.png",
        quantity: 0
    },
    {
        name: "Confetes' Easter Egg",
        price: 65.90,
        priceText: "R$ 65.90",
        image: "./img/Confetes.png",
        quantity: 0
    }
]

products.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.className = "col-3 m-5 text-center shadow product-box";
    productContainer.style.height = "30rem";
    productContainer.innerHTML = `
        <div class="row">
            <img src="${product.image}" alt="${product.name}" class="h-100 w-75 bg-light col-12  product-box-img imgProduct">
            <span class="h6 col-12 d-flex justify-content-start m-3 nameProduct">${product.name}</span>
            <div class="col-12 d-flex justify-content-center">
                <div class="border border-danger p-2" id="counter">
                    <button id="mais" class="text-dark btn btn-outline-danger mais">+</button>
                    <span id="value" class=" text-dark valor">0</span>
                    <button id="menos" class=" text-dark btn btn-outline-danger menos">-</button>
                </div>
            </div>
            <span class="col-6 d-flex m-3 priceProduct"><strong>${product.priceText}</strong></span>
            <button class="col-3 ml-4 mr-3 mt-2 mb-3 d-flex justify-content-center  btn btn-success btnCompra">Buy</button>
         </div>
    `;
    const body = document.querySelector("body");
    body.appendChild(productContainer);

    const maisButton = productContainer.querySelectorAll(".mais");
    const menosButton = productContainer.querySelector(".menos");
    const valueSpan = productContainer.querySelector(".valor");
 
    maisButton.forEach((maisButton,index) =>{
        maisButton.addEventListener("click", () => {
            const product = products[index];
            product.quantity += 1; 
            valueSpan.innerText = product.quantity; 
            product.price = product.quantity*product.price;
            console.log(product.price); // Log the updated price to the console
        });
    })
    menosButton.addEventListener("click", () => {
        if (product.quantity > 0) {
            product.quantity -= 1; 
            valueSpan.innerText = product.quantity; 
            product.price = product.quantity*product.price;
        }
    });
});

const btnCompra = document.querySelectorAll(".btnCompra")
btnCompra.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const product = products[index];
        if (product.quantity === 0) {
            alert("Please select a quantity before adding to the cart.");
        } 
        else{
            const cartItem = document.createElement("div");
            const divItems = document.getElementById("divItems")
            cartItem.className = "product-cart d-flex justify-content-between align-items-center shadow-sm p-3";
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-cart-img">
                <span class="product-cart-name">${product.name}</span>
                <span class="product-cart-price">x ${product.quantity} = R$${product.price.toFixed(2)}</span>
            `;
            divItems.appendChild(cartItem);
        }
    });
});


// Cart Command Section

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