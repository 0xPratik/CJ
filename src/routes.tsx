import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Buy from "./pages/buy";
import Explore from "./pages/explore";
import "./App.css";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Container>
          <NavBar />
          <div className="hero-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}
