import { Box, Container } from "@mui/material";
import Banner from "../../components/Banner";
import CardContainer from "../../components/CardsContainer";
import Banner2 from "../../assets/Banner2.png";

import "./index.css";

export default function index() {
  return (
    <div className="hero-container">
      <CardContainer explore={true} />
      <Banner Image={Banner2} route="/" />
    </div>
  );
}
