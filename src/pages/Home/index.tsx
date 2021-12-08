import { Container, Typography, Box } from "@mui/material";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar/index";
import Banner from "../../components/Banner/index";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardsContainer/index";
import "./index.css";

export default function Home() {
  return (
    <div className="hero-container">
      <Box sx={{ width: "75%", marginBottom: "2vh" }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          Let's make your best trip with{" "}
          <span className="hero-text-blockchain">blockchain</span>
        </Typography>
      </Box>
      <SearchBar />
      <CardContainer />
      <Banner />
    </div>
  );
}
