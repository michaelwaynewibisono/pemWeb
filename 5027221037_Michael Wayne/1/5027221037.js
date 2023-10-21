let namaProduk1 = document.getElementById('name1');
let fotoProduk1 = document.getElementById('image1');
let priceProduk1 = document.getElementById('price1');
let discountProduct1 = document.getElementById('discount1');
let rateProduct1 = document.getElementById('rate1');
let reviewProduct1 = document.getElementById('reviews1');

let namaProduk2 = document.getElementById('name2');
let fotoProduk2 = document.getElementById('image2');
let priceProduk2 = document.getElementById('price2');
let discountProduct2 = document.getElementById('discount2');
let rateProduct2 = document.getElementById('rate2');
let reviewProduct2 = document.getElementById('reviews2');

let namaProduk3 = document.getElementById('name3');
let fotoProduk3 = document.getElementById('image3');
let priceProduk3 = document.getElementById('price3');
let discountProduct3 = document.getElementById('discount3');
let rateProduct3 = document.getElementById('rate3');
let reviewProduct3 = document.getElementById('reviews3');

let namaProduk4 = document.getElementById('name4');
let fotoProduk4 = document.getElementById('image4');
let priceProduk4 = document.getElementById('price4');
let discountProduct4 = document.getElementById('discount4');
let rateProduct4 = document.getElementById('rate4');
let reviewProduct4 = document.getElementById('reviews4');

let namaProduk5 = document.getElementById('name5');
let fotoProduk5 = document.getElementById('image5');
let priceProduk5 = document.getElementById('price5');
let discountProduct5 = document.getElementById('discount5');
let rateProduct5 = document.getElementById('rate5');
let reviewProduct5 = document.getElementById('reviews5');

fetch("https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/products")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })

    .then(response => {
        namaProduk1.innerHTML = `<div>${response.products[0].name}</div>`
        fotoProduk1.innerHTML = `<img style="width: 10rem !important; padding: 1rem 0" src="${response.products[0].image_url}"></img>`
        priceProduk1.innerHTML = `<div>${response.products[0].price}</div>`
        discountProduct1.innerHTML = `<div>${response.products[0].discount} off</div>`
        rateProduct1.innerHTML = `<div>⭐ ${response.products[0].rating}</div>`
        reviewProduct1.innerHTML = `<div>Viewed by: ${response.products[0].reviews_count}</div>`

        namaProduk2.innerHTML = `<div>${response.products[1].name}</div>`
        fotoProduk2.innerHTML = `<img style="width: 10rem !important; padding: 1rem 0;" src="${response.products[1].image_url}"></img>`
        priceProduk2.innerHTML = `<div>${response.products[1].price}</div>`
        discountProduct2.innerHTML = `<div>${response.products[1].discount} off</div>`
        rateProduct2.innerHTML = `<div>⭐ ${response.products[1].rating}</div>`
        reviewProduct2.innerHTML = `<div>Viewed by: ${response.products[1].reviews_count}</div>`

        namaProduk3.innerHTML = `<div>${response.products[2].name}</div>`
        fotoProduk3.innerHTML = `<img style="width: 10rem !important; padding: 1rem 0;" src="${response.products[2].image_url}"></img>`
        priceProduk3.innerHTML = `<div>${response.products[2].price}</div>`
        discountProduct3.innerHTML = `<div>${response.products[2].discount} off</div>`
        rateProduct3.innerHTML = `<div>⭐ ${response.products[2].rating}</div>`
        reviewProduct3.innerHTML = `<div>Viewed by: ${response.products[2].reviews_count}</div>`

        namaProduk4.innerHTML = `<div>${response.products[3].name}</div>`
        fotoProduk4.innerHTML = `<img style="width: 10rem !important; padding: 1rem 0;" src="${response.products[3].image_url}"></img>`
        priceProduk4.innerHTML = `<div>${response.products[3].price}</div>`
        discountProduct4.innerHTML = `<div>${response.products[3].discount} off</div>`
        rateProduct4.innerHTML = `<div>⭐ ${response.products[3].rating}</div>`
        reviewProduct4.innerHTML = `<div>Viewed by: ${response.products[3].reviews_count}</div>`

        namaProduk5.innerHTML = `<div>${response.products[4].name}</div>`
        fotoProduk5.innerHTML = `<img style="width: 10rem !important; padding: 1rem 0;" src="${response.products[4].image_url}"></img>`
        priceProduk5.innerHTML = `<div>${response.products[4].price}</div>`
        discountProduct5.innerHTML = `<div>${response.products[4].discount} off</div>`
        rateProduct5.innerHTML = `<div>⭐ ${response.products[4].rating}</div>`
        reviewProduct5.innerHTML = `<div>Viewed by: ${response.products[4].reviews_count}</div>`
    })