const product1 = {
  name: "Casaco Off White",
  brand: "Zara",
  price: 90,
  image: "product-1.jpg",
  imageText: "Casaco de botão manga longa de cor off white",
};

const productCard = `
  <div class="product__card" id="product__card--01">
    <img class="product__image" src="src/img/${product1.image}" alt="${product1.imageText}" />
    <p class="product__brand">${product1.brand}</p>
    <p class="product__name">${product1.name}</p>
    <p class="product__price">R$ ${product1.price},00</p>
    <button class="product__buy">Comprar</button>
  </div>
`;

const productContainer = document.getElementById("product__container");

productContainer.innerHTML = productCard;
