import React, { useState } from "react";
import Counter from "./Counter";
import MyProduct from "./MyProduct";

const Product = () => {
  let title = "Learn how to create ...";
  let test = true;

  const [products, setProducts] = useState([
    {
      id: 1,
      label: "IPhone 13",
      price: 3000,
    },
    {
      id: 2,
      label: "Samsung Note 7",
      price: 5000,
    },
    {
      id: 3,
      label: "Infinix Hot 10",
      price: 2000,
    },
  ]);

  const deleteProduct = (id) => {
   let myList= products.filter((product) => product.id !== id);
    setProducts(prev => myList)
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, explicabo
        dolore placeat amet iure excepturi!
      </p>
      {test && (
        <ul>
          {products.map((product, index) => {
            return (
              <div key={index}>
                <MyProduct id={product.id} onDeleteProduct={deleteProduct}>
                  <div className="card-header">{product.label}</div>
                  <div className="card-body">
                    <h4 className="card-title">{product.label}</h4>
                    <p className="card-text">
                      <button className="btn btn-danger">
                        {product.price}
                      </button>
                    </p>
                  </div>
                </MyProduct>
              </div>
            );
          })}
        </ul>
      )}

      <Counter />
    </div>
  );
};

export default Product;
