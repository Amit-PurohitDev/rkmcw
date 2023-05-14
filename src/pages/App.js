import "../style/App.css";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Shop from "../pages/Shop";
import Policies from "../pages/Policies";
import Contact from "../pages/Contact";

import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
