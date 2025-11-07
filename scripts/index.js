import { products } from "./products.js";
const productsContainer =  document.querySelector(".js-product-container");
const adventureBtn = document.getElementById("adventure-button");
const rpgBtn = document.getElementById("rpg-button");
const soulslikeBtn = document.getElementById("soulslike-button");

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




adventureBtn.addEventListener("click", () => {
    displayByCategory('Adventure');
});

rpgBtn.addEventListener("click", () => {
    displayByCategory('RPG');
});

soulslikeBtn.addEventListener("click", () => {
    displayByCategory('soulslike');
});



function displayByCategory(type){
    switch(type){
        case 'RPG':
            displayRpgGames(type);
            break;
        case 'soulslike':
            displaySoulslikeGames(type);
            break;
        case 'Adventure':
            displayAdventureGames(type);
            break;
    }
}


function displayRpgGames(type){
    html = ``;
    for(let i = 0; i  < products.length; i++){
        if(products[i].type == 'RPG'){
            html += `        
                <div class="product">
                    <h2>${products[i].name}</h2>
                    <div class="game-type">${products[i].type}</div>
                    <img src="${products[i].image}" alt="${products[i].name}" class="product-img"/>
                    <p>${products[i].description}</p>
                    <p>Price: ${products[i].price} SAR</p>
                    <button class="buy-button">Buy Now</button>
                </div>`
        }
    }
    productsContainer.innerHTML = html;
}


function displaySoulslikeGames(type){
    html = ``;
    for(let i = 0; i  < products.length; i++){
        if(products[i].type == 'soulslike'){
            html += `       
                <div class="product">
                    <h2>${products[i].name}</h2>
                    <div class="game-type">${products[i].type}</div>
                    <img src="${products[i].image}" alt="${products[i].name}" class="product-img"/>
                    <p>${products[i].description}</p>
                    <p>Price: ${products[i].price} SAR</p>
                    <button class="buy-button">Buy Now</button>
                </div>`
        }
    }
    productsContainer.innerHTML = html;
}



function displayAdventureGames(type){
    html = ``;
    for(let i = 0; i  < products.length; i++){
        if(products[i].type == 'Adventure'){
            html += `
                <div class="product">
                    <h2>${products[i].name}</h2>
                    <div class="game-type">${products[i].type}</div>
                    <img src="${products[i].image}" alt="${products[i].name}" class="product-img"/>
                    <p>${products[i].description}</p>
                    <p>Price: ${products[i].price} SAR</p>
                    <button class="buy-button">Buy Now</button>
                </div>`
        }
    }
    productsContainer.innerHTML = html;
}

