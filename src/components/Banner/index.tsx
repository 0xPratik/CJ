import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/styles";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/Banner2.png";
import { Link } from "react-router-dom";
import "./index.css";

const BannerContainer = styled(({ src, ...others }) => <Box {...others} />)({
  backgroundImage: (props) => `url(${props.src})`,
  width: "100%",
  height: "450px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "10px",
  marginTop: "5vh",
});

export interface BannerProps {
  Image: any;
}

export default function Banner(props: BannerProps) {
  return (
    <BannerContainer src={props.Image}>
      <Box sx={{ padding: "100px" }}>
        <Typography variant="h1" sx={{ color: "white", paddingBottom: "30px" }}>
          2021 US Open
        </Typography>
        <Link to="/explore" className="btn">
          Explore
        </Link>
      </Box>
    </BannerContainer>
  );
}
