import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import User from "./components/User/User";
import Header from "./components/Header/Header";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
          <Header/>
          <Routes>
          <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<User />} />
          </Routes>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


