import React from "react";
import {
  Box,
  Grid,
  Stack,
  Link,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const [language, setLanguage] = React.useState("");
  const [token, setToken] = React.useState("");

  const handleTokenChange = (event: SelectChangeEvent) => {
    setToken(event.target.value as string);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  return (
    <Box sx={{ marginTop: "5vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Stack spacing={2}>
            <Box>
              <FormControl>
                <InputLabel id="demo-simple-select-label">English</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  label="Age"
                  onChange={handleChange}
                  sx={{ width: 100 }}
                >
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>Chinese</MenuItem>
                  <MenuItem value={30}>Russian</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <InputLabel id="demo-simple-select-label">TKT</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  label="Age"
                  onChange={handleTokenChange}
                  sx={{ width: 100 }}
                >
                  <MenuItem value={10}>TKT</MenuItem>
                  <MenuItem value={20}>MTT</MenuItem>
                  <MenuItem value={30}>SOL</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography variant="h6" display="block">
              Toktel
            </Typography>
            <Box>
              <Link href="#" underline="none">
                About Us
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Careers
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Press
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Policies
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Help
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Diversity & Belonging
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography variant="h6" display="block">
              Discover
            </Typography>
            <Box>
              <Link href="#" underline="none">
                Trust & Safety
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Travel Credit
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Gidt Cards
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Toktel Citizen
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Business Travel
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Guidebooks
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Toktelmag
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={1}>
            <Typography variant="h6" display="block">
              Hosting
            </Typography>
            <Box>
              <Link href="#" underline="none">
                Why Host
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Hospitality
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Responsible Hosting
              </Link>
            </Box>
            <Box>
              <Link href="#" underline="none">
                Community Center
              </Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        sx={{ width: "100%", marginTop: "3vh" }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography display="block">Toktel, Inc</Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Box>
            <Link href="#" underline="none">
              Terms
            </Link>
          </Box>
          <Box>
            <Link href="#" underline="none">
              Privacy
            </Link>
          </Box>
          <Box>
            <Link href="#" underline="none">
              Site map
            </Link>
          </Box>
          <Box>
            <Link href="#" underline="none">
              <FacebookOutlinedIcon />
            </Link>
          </Box>
          <Box>
            <Link href="#" underline="none">
              <TwitterIcon />
            </Link>
          </Box>
          <Box>
            <Link href="#" underline="none">
              <InstagramIcon />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
