import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:phrase" element={<Search />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
