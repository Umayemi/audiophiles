import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Headphones from "./pages/Headphones";
import Earphones from "./pages/Earphones";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/speaker" element={<Speakers/>} />
        <Route path="/headphone" element={<Headphones/>} />
        <Route path="/earphone" element={<Earphones/>} />
        <Route path="/detail" element={<ProductDetails/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
       
      </BrowserRouter>
     
    </div>
  );
}

export default App;
