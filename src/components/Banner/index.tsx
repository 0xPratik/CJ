import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/styles";
import Banner1 from "../../assets/banner1.png";

const BannerContainer = styled(Box)({
  backgroundImage: `url(${Banner1})`,
  width: "100%",
  height: "450px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "10px",
  marginTop: "5vh",
});

export default function Banner() {
  return (
    <BannerContainer>
      <Box sx={{ padding: "100px" }}>
        <Typography variant="h1" sx={{ color: "white", paddingBottom: "30px" }}>
          2021 US Open
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "white",
            padding: "15px 40px",
            fontSize: "15px",
            backgroundColor: "#F5BC41",
          }}
        >
          Explore
        </Button>
      </Box>
    </BannerContainer>
  );
}
