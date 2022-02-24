let plus = document.querySelectorAll(".fa-plus");
let minus = document.querySelectorAll(".fa-minus");
let quantity = document.querySelectorAll("#product-quantity");
let product = document.querySelectorAll(".product");
let remove = document.querySelectorAll(".remove-product");
let priceLinePrice = document.querySelectorAll(".product-line-price");
let price = document.querySelectorAll(".product-price p strong")
// console.log(price[1]);
let subtotal = document.querySelectorAll(".buy-detail")[0].children[1];
let tax = document.querySelectorAll(".buy-detail")[1].children[1];
let shipping = document.querySelectorAll(".buy-detail")[2].children[1];
let total = document.querySelectorAll(".buy-detail")[3].children[1];

buyDetail();
for (let i = 0; i< minus.length; i++){
    plus[i].parentElement.addEventListener("click",()=>{
        (+quantity[i].innerHTML++).toFixed(2);
        priceLinePrice[i].innerHTML = (+quantity[i].innerHTML * price[i].textContent).toFixed(2);
        buyDetail();
    });
    minus[i].parentElement.addEventListener("click", ()=>{
        +quantity[i].innerHTML <= 0 ? 0 : (quantity[i].innerHTML--).toFixed(2);
        priceLinePrice[i].innerHTML = (+quantity[i].innerHTML * price[i].textContent).toFixed(2);
        buyDetail()
    });
    remove[i].addEventListener("click",() => {
        if(confirm("Are you sure !!!\nYou want to remove the product?") == true){
            product[i].remove();
            buyDetail()
        } 
    })
};
function buyDetail(){
    priceLinePrice = document.querySelectorAll(".product-line-price");
    let subprice = 0;
    priceLinePrice.forEach ( i => {subprice += +i.innerHTML});
    subtotal.innerHTML = subprice.toFixed(2);
    tax.innerHTML = (subtotal.innerHTML* 0.18).toFixed(2);
    shipping.innerHTML = (subprice == 0 ? 0 : 15.00).toFixed(2);
    total.innerHTML = (+subtotal.innerHTML + +tax.innerHTML + +shipping.innerHTML).toFixed(2); 
};

