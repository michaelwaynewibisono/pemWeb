fetch("https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/products")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(response => {
        const productsRow = document.getElementById('products-row');

        response.products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'mb-2');

            /*
            if (index == 2) {
                product.image_url = "https://drive.google.com/uc?id=1e29s0iWP40sIPtkmSJ-QDYYQTh0y0_P9";
            }
            */

            productCard.innerHTML = `
            <div class="border rounded p-3">
                <div>${product.name}</div>
                <div class="foto"><img style="width: 10rem; padding: 1rem 0" src="${product.image_url}" /></div>
                <div class="d-flex gap-2">
                    <div>${product.price}</div>
                    <div>${product.discount} off</div>
                </div>
                <div>⭐ ${product.rating}</div>
                <div>Viewed by: ${product.reviews_count}</div>
            </div>
        `;

            productsRow.appendChild(productCard);
        });
    });