import { Box, Typography, Paper, Grid, Stack, Button } from "@mui/material";
import "./index.css";
import Divider from "@mui/material/Divider";

export default function SearchBar() {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid #DBDBDB",
        boxSizing: "border-box",
        boxShadow: "0px 2px 24px #ECECEC",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={2}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Location
            </Typography>
            <Typography
              sx={{ color: "#717171", fontSize: "14px", fontWeight: "600" }}
            >
              Where are you goning?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={2}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Check in - Check out
            </Typography>
            <Typography
              sx={{ color: "#717171", fontSize: "14px", fontWeight: "600" }}
            >
              Add dates
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            spacing={2}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              Guests
            </Typography>
            <Typography
              sx={{ color: "#717171", fontSize: "14px", fontWeight: "600" }}
            >
              Add guests
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Button
            sx={{
              backgroundColor: "#F5BC41",
              color: "white",
              padding: "10px 40px",
              fontSize: "16px",
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
