import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
import { UserContext } from "../../context/UserContext/UserState";
import { UserDeleteOutlined, UserAddOutlined, LoginOutlined, HomeOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import { Badge } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import logo from '../../images/logo.png';

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logoutUser = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="logo">        
        <img src={logo} alt="Logo" />
        <h2>Store</h2>
      </div>
      {location.pathname !== "/" && <Link to="/"> Home<HomeOutlined /></Link>}

      {token ? (
        <>
          <Link to="/users">User<UserOutlined /></Link>
          <Link to="/cart">
            <Badge count={cart.length} size="small">
              <ShoppingCartOutlined />
            </Badge>
          </Link>

          <button onClick={logoutUser}>
            Logout <UserDeleteOutlined />
          </button>
        </>
      ) : (
        <>
        <div className="login">
          <Link to="/login">
            Login <LoginOutlined />
          </Link>
          <Link to="/register">Register<UserAddOutlined /></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
