const catalog = [
  {
    id: "01",
    brand: "Zara",
    name: "Camisa Larga com Bolsos",
    price: 70,
    image: "product-1",
    imageText: "Camisa Larga com Bolsos",
    female: false,
  },
  {
    id: "02",
    brand: "Zara",
    name: "Casaco Reto com Lã",
    price: 85,
    image: "product-2",
    imageText: "Casaco Reto com Lã",
    female: true,
  },
  {
    id: "03",
    brand: "Zara",
    name: "Jaqueta com Efeito Camurça",
    price: 60,
    image: "product-3",
    imageText: "Jaqueta com Efeito Camurça",
    female: false,
  },
  {
    id: "04",
    brand: "Zara",
    name: "Sobretudo em Mescla de Lã",
    price: 160,
    image: "product-4",
    imageText: "Sobretudo em Mescla de Lã",
    female: false,
  },
  {
    id: "05",
    brand: "Zara",
    name: "Camisa Larga Acolchoada de Veludo Cotelê",
    price: 110,
    image: "product-5",
    imageText: "Camisa Larga Acolchoada de Veludo Cotelê",
    female: false,
  },
  {
    id: "06",
    brand: "Zara",
    name: "Casaco de Lã com Botões",
    price: 170,
    image: "product-6",
    imageText: "Casaco de Lã com Botões",
    female: true,
  },
  {
    id: "07",
    brand: "Zara",
    name: "Casaco com Botões",
    price: 75,
    image: "product-7",
    imageText: "Casaco com Botões",
    female: true,
  },
  {
    id: "08",
    brand: "Zara",
    name: "Colete Comprnumbero com Cinto",
    price: 88,
    image: "product-8",
    imageText: "Colete Comprnumbero com Cinto",
    female: true,
  },
];

for (const catalogProduct of catalog) {
  const productContainer = document.getElementById("product__container");
  productContainer.innerHTML += `
  <div class="product__card" id="product__card--${catalogProduct.id}">
    <img class="product__image" src="src/img/${catalogProduct.image}.jpg" alt="${catalogProduct.imageText}" />
    <p class="product__brand">${catalogProduct.brand}</p>
    <p class="product__name">${catalogProduct.name}</p>
    <p class="product__price">R$ ${catalogProduct.price},00</p>
    <button class="product__buy">Comprar</button>
  </div>
`;
}
