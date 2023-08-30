import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import Card from "antd/es/card/Card";
import "./Products.scss"


const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.name}
            bordered={false}
            style={{
              width: 300,
              border: "1px solid",
              borderColor: "balck",
              
            }}
          > 
             <p>Type: {product.type} </p>
             <p>Brand: {product.brand} </p>
             <p>Description: {product.content} </p>
             <p>Price: {product.price} €</p>            
            <button onClick={() => addCart(product)}>Add to cart</button>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
