// Dados de exemplo para os produtos
const products = [
  {
    name: "Capa de Silicone para iPhone",
    price: 15.24,
    image: "capas.jpg",
    affiliateLink: "https://amzn.to/43RrNHa"
  },
  {
    name: "Apple AirPods (1.ª geração) com caixa de carregamento com cabo",
    price: 147.39,
    image: "airpds.png",
    affiliateLink: "https://amzn.to/45SK2xI"
  },
  {
    name: "Apple AirPods (3.ª geração) com estojo de carregamento Lightning (2022)",
    price: 188.05,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861338000",
    affiliateLink: "https://amzn.to/3qqLkjg"
  },
  {
    name: "Carregador de Iphone",
    price: 12.73,
    image: "carregador.webp",
    affiliateLink: "https://amzn.to/3OWI4Xg"
  },

  // Adicione mais produtos aqui...
];

// Função para exibir a lista de produtos na página
function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;

    const productName = document.createElement("h3");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price.toFixed(2)}`;

    const productLink = document.createElement("a");
    productLink.href = product.affiliateLink;
    productLink.textContent = "Ver Produto";

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productLink);

    productList.appendChild(productCard);
  });
}

// Chama a função para exibir os produtos ao carregar a página
window.addEventListener("load", displayProducts);