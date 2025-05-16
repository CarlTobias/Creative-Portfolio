import { Routes, Route } from "react-router-dom";

import NavBar from "./Layouts/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
