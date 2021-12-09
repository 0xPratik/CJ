import {
  Box,
  Stack,
  Link,
  Grid,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "../Card/index";
import Img1 from "../../assets/home/img1.png";
import Img2 from "../../assets/home/img2.png";
import Img3 from "../../assets/home/img3.png";
import Img4 from "../../assets/home/img4.png";
import Img5 from "../../assets/home/img5.png";
import Img6 from "../../assets/home/img6.png";

import "./index.css";

export default function CardContainer() {
  return (
    <Box sx={{ marginTop: "7vh" }}>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ color: "#484848", paddingBottom: "12px" }}
            >
              its time to adventure
            </Typography>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" fontSize="16px">
              <Link href="#" underline="none">
                See all
              </Link>
              <ChevronRightIcon />
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Card imageSrc={Img1} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card imageSrc={Img2} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card imageSrc={Img3} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card imageSrc={Img4} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card imageSrc={Img5} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card imageSrc={Img6} />
        </Grid>
      </Grid>
    </Box>
  );
}
