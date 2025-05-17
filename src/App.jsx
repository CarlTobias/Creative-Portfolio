import { Routes, Route } from "react-router-dom";

import NavBar from "./Layouts/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
