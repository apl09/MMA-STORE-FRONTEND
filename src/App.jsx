import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import User from "./components/User/User";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


