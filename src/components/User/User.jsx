import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import "./User.scss";

const User = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <Spin size="large" />;
  }

  return (
    <div className="user-container">
      <div className="user-content">
        <Card
          title={user.name}
          bordered={true}
          className="user-card"
        >
          <p>{user.email}</p>
        </Card>

        <div className="order-section">
          {user.Orders.map((order) => (
            <div key={order.id} className="order-card">
              <p>Order nº: {order.id}</p>
              <div className="product-list">
                {order.Products.map((product) => (
                  <div key={product.id} className="product-item">
                    <span>
                      {product.name} {product.price} €
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
