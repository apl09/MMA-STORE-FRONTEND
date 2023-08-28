import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Divider, List, notification  } from "antd";
import { OrdersContext } from "../../context/OrdersContext/ordersState";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const {createOrder} = useContext(OrdersContext)
  const navigate = useNavigate();

  const data = cart.map((product) => product.name);

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
};

  return (
    <div>
      <Divider orientation="left">Cart</Divider>
      <List
        size="small"
        header={<div>Products</div>}
        footer={
          <div>
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={()=>{
                createOrder(cart)
                clearCart()
                notification.success({
                    message: 'Purchease made successfully!!',
                    description:
                      'See your order in your profile',
                  });
                setTimeout(() => {
                    navigate("/users")
                }, 2000);
                
            }}>Buy</button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
       <div className="total">Total:   {calculateTotalPrice().toFixed(2)}€</div>
    </div>
  );
};

export default Cart;