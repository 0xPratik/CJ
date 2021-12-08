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
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  );
}
