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














//let OuroBranco = `<div class="row">
//<img src="./img/OuroBranco.png" alt="Ouro Branco's Easter Egg" class="h-100 w-75 bg-light col-12  product-box-img">
//<span class="h6 col-12 d-flex justify-content-start m-3">Ouro Branco's Easter Egg - 100g</span>
//<span class="col-6 d-flex m-3"><strong>R$ 45,90</strong></span>
//<button class="col-3 ml-4 mr-3 mt-2 mb-3 d-flex justify-content-center  btn btn-success btnCompra">Buy</button>
//</div>`
//let SonhoDeValsa  = ["Sonho de Valsa's Easter Egg", 39,99, quantity = 1]
//let FerreroColletion = ["FerreroCollection's Easter Egg", 59,90, quantity = 1]
//let Products = [OuroBranco, SonhoDeValsa, FerreroColletion]
