import React from 'react'
import ContainerProd from './ContainerProd';

function ContainerBase() {
  const products = [
    {
      id: 1,
      name: "Shirts",
      oldPrice: 699,
      newPrice: 399,
      url: "./Images/gallery-06.jpg",
      logo1: "./Images/logo/logo-libas.png.webp",
      logo2: "./Images/logo/elle-logo-vector.png",
      logo3: "./Images/logo/roadster.png",
    },
    {
      id: 2,
      name: "Kurta",
      oldPrice: 699,
      newPrice: 399,
      url: "./Images/gallery-06.jpg",
      logo1: "./Images/logo/logo-libas.png.webp",
      logo2: "./Images/logo/logo-libas.png.webp",
      logo3: "./Images/logo/logo-libas.png.webp",
    },
  ];
    return (
      <>
        <h3
          className="text-uppercase fw-semibold m-4"
          style={{ letterSpacing: "0.5rem" }}
        >
          Deal of the Day
        </h3>
        <div>{products.map ((product) => { return(<ContainerProd item = {product}></ContainerProd> )})}</div>
        
      </>
    );
}

export default ContainerBase