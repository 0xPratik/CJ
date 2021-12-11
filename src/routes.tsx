import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as anchor from "@project-serum/anchor";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Buy from "./pages/buy";
import Explore from "./pages/explore";
import Footer from "./components/Footer";
import Hotel from "./pages/hotel";
import "./App.css";

export default function AllRoutes() {
  const treasury = new anchor.web3.PublicKey(
    "12bgaXpYAnHYrhnwAtqD1t9xkuWS6AuDzcADUPrJDj3s"
  );

  console.log("Treasury", treasury);

  const config = new anchor.web3.PublicKey(
    "FmyZMewmaxsRK8C6EaP1de6eSix2WMMfNipMjq6ai1VM"
  );

  const candyMachineId = new anchor.web3.PublicKey(
    "8aoARDkQbg8shkL6LBgcHDvnqs1o9MbXUkJc3ksgEhPq"
  );

  const txTimeout = 30000;
  return (
    <BrowserRouter>
      <div className="main-container">
        <Container>
          <NavBar />
          <div className="hero-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/buy"
                element={
                  <Buy
                    candyMachineId={candyMachineId}
                    treasury={treasury}
                    config={config}
                    txTimeout={txTimeout}
                  />
                }
              />
              <Route path="/explore" element={<Explore />} />
              <Route path="/hotel" element={<Hotel />} />
            </Routes>
            <Footer />
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}
