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
    <div>
      <Card
        title={user.name}
        bordered={true}
        style={{
          width: 300,
          borderColor: "pink",
          marginTop: "10px",
        }}
      >
        <p>{user.email}</p>
      </Card>

      <div>
        { user.Orders.map((order) => (
            <div key={order.id} className="order-card">
              <p>Order nº: {order.id}</p>
              <div>
                { order.Products.map((product) => {
                    return (
                      <div key={product.id}>
                        <span>
                          {product.name} {product.price} €
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default User;
