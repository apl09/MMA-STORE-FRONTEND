import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserDeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import "./Header.scss"

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="header">
      <Link to="/">Home /</Link>
      {token ? (
        <>
          <Link to="/users"> User /</Link>          

          <button onClick={logoutUser}>
            Logout <UserDeleteOutlined />
          </button>
        
        </>
      ) : (
        <Link to="/login">
           Login <UserAddOutlined />
        </Link>
      )}
    </div>
  );
};

export default Header;