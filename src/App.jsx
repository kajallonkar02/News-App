import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/search";
<Route path="/search" element={<Search />} />


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
