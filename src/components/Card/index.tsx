import { Box, Paper, Typography, Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./index.css";

export default function index() {
  return (
    <Paper variant="outlined" className="Card">
      <Box>
        <img
          src="https://picsum.photos/seed/picsum/400/400"
          className="Card-image"
          alt="hotel"
        />
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Typography
          variant="h5"
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          TAIPEI Beach Norway
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          The Joshua Tree House
        </Typography>
        <Typography
          sx={{ color: "#818181", fontSize: "12px", fontWeight: "500" }}
        >
          7 Sept - 10 Sept
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ paddingTop: "12px" }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#F5BC41",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              0.14 TKT
            </Typography>
          </Box>
          <Box>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <FavoriteBorderOutlinedIcon />
              <Typography
                variant="button"
                sx={{
                  color: "#818181",
                  fontWeight: "700",
                  fontSize: "12px",
                  paddingLeft: "4px",
                }}
              >
                200
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}
