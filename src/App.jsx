import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import User from "./components/User/User";
import Header from "./components/Header/Header";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrdersContext/ordersState";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrdersProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<User />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          </OrdersProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


