import "../style/App.css";
import Home from "../pages/Home";
import Service from "../pages/Service";
import ProductGallery from "../pages/ProductGallery";
import Policies from "../pages/Policies";
import Contact from "../pages/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../components/user/Cart";
import { Provider } from "react-redux";
import store from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes className="App">
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/productgallery" element={<ProductGallery />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
