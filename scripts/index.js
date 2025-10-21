// we will import the products
import { products } from "./products.js";


// we will fetch our precious elements (product container for html usage, buttons,  etc..)
const productsContainer =  document.querySelector(".js-product-container");

// now we will create a function that will render our products dynamically

let html = "";

products.forEach( (product) => {
    html += `
        <div class="product">
            <h2>${product.name}</h2>
            <div class="game-type">${product.type}</div>
            <img src="${product.image}" alt="${product.name}" class="product-img"/>
            <p>${product.description}</p>
            <p>Price: ${product.price} SAR</p>
            <button class="buy-button">Buy Now</button>
        </div>`;
});

productsContainer.innerHTML = html;
const addToCartButton = document.querySelectorAll(".buy-button");
let cartQuantity = document.querySelector(".label");
const cart = [];
function addItemToCart(productId) {

    let matchingProduct = cart.find(product => product.id === productId);

    if (matchingProduct) {
        matchingProduct.quantity += 1;
        updateCartQuantity();
        return;
    }
    let product = getElementById(productId);
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        type: product.type,
        quantity: 1,
    });
    updateCartQuantity();
}


function updateCartQuantity(){
    let totalQuantity = 0;
    cart.forEach( (item) => {
        totalQuantity += item.quantity;
    });
    cartQuantity.innerText = totalQuantity;
}


function getElementById(productId){
    for(let i = 0; i < products.length; i++){
        if(products[i].id === productId){
            return products[i];
        }
    }
    return null;
}




addToCartButton.forEach( (button, index) => {
    button.addEventListener("click", () => {
        const productId = products[index].id;
        addItemToCart(productId);
        console.log(cart);
    });
});

