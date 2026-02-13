import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./styles/design-tokens.scss";
import Navbar from "./components/navbar";
import { homeData } from "./pages/home/data";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home {...homeData} />} />
      </Routes>
    </div>
  );
}

export default App;
