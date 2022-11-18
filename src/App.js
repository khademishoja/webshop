// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailsPage from "./pages/DetailsPage";
import { Navbar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer.js/Footer";
import ProductsByCategory from "./pages/ProductsByCategory";
import SignUp from "./components/SignUp";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/category/:id" element={<ProductsByCategory />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
