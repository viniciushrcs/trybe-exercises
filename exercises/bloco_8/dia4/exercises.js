const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas'
  };

  const { name = "brazilian"} = product;
console.log(name); // Smart TV Crystal UHD
console.log(product)
