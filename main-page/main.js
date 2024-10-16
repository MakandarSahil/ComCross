const template = document.getElementById("prod-card");
const searchBox = document.getElementById("search-box");
const ebayDiv = document.getElementById("ebay-div");
const walmartDiv = document.getElementById("walmart-div");
const baseLink = "https://fakestoreapi.com/products/category/";
const loadFirstProds = async () => {
    let searchText = searchBox.value;
    let url = baseLink + searchText;
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            if (json.length == 0) {
                ebayDiv.innerHTML = "";
                walmartDiv.innerHTML = "";
                ebayDiv.append("Product not found!");
                walmartDiv.append("Product not found!");
                return;
            }
            console.log(json);
            json.forEach((product) => {
                let productCard = template.cloneNode(true);
                productCard.style.display = "block";
                productCard.querySelector("#prod-name").innerText =
                    product.title;

                productCard.querySelector("#prod-price").innerText =
                    "$" + product.price;

                productCard.querySelector("#prod-img").src = product.image;
                // append product
                ebayDiv.appendChild(productCard);
                walmartDiv.appendChild(productCard.cloneNode(true));
            });
        });
};
