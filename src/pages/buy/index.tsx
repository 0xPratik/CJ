import {
  Box,
  Typography,
  Grid,
  Stack,
  Button,
  Tabs,
  Tab,
  Avatar,
  Rating,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import React from "react";
import "./index.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Index() {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid container sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <img
              src="https://picsum.photos/200/300"
              alt="This"
              className="image"
            />
          </Grid>
          <Grid item xs={7}>
            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Typography variant="h3" sx={{ fontWeight: "600" }}>
                Paradise New York
              </Typography>
              <Box sx={{ color: "#242424", display: "flex" }}>
                <FavoriteBorderOutlinedIcon />
                <Typography
                  sx={{
                    paddingLeft: "5px",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  45
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ paddingTop: "3%", paddingBottom: "3%" }}>
              <Typography variant="h4">
                Adults-only beachfront hotel with spa, near Arthur Ashe's
                Stadium
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  borderRadius: "5px",
                  padding: "5%",
                  border: "1px solid #DBDBDB",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#818181", pb: "10px", fontWeight: "600" }}
                >
                  Current price
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "700" }}>
                  0.3 TKT
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#818181", pt: "5px", fontWeight: "500" }}
                >
                  10% of sales will do to creator
                </Typography>
                <Box sx={{ pt: "20px" }}>
                  <Button
                    sx={{
                      backgroundColor: "#F5BC41",
                      padding: "5px 10px",
                      fontWeight: "600",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    Buy now
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ borderBottom: 2, borderColor: "white" }}>
                <Tabs value={value} onChange={handleChange} aria-label="Tabs">
                  <Tab
                    label="Activity"
                    sx={{
                      color: "#818181",
                      fontWeight: "600",
                      fontSize: "14px",
                      textTransform: "capitalize",
                    }}
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      color: "#818181",
                      fontWeight: "600",
                      fontSize: "14px",
                      textTransform: "capitalize",
                    }}
                    label="History"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{
                      color: "#818181",
                      fontWeight: "600",
                      fontSize: "14px",
                      textTransform: "capitalize",
                    }}
                    label="Details"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography>Reviews</Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography>See all</Typography>
                  <ChevronRightSharpIcon />
                </Box>
              </Stack>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      padding: "10px",
                      borderRadius: "5px",
                      height: "150px",
                      border: "1px solid #DBDBDB",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "2%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                          color: "#6F6F6F",
                          fontSize: "12px",
                        }}
                      >
                        Cleaniness
                      </Typography>
                      <Box>
                        <Rating
                          name="half-rating"
                          defaultValue={5.0}
                          precision={0.5}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "2%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                          color: "#6F6F6F",
                          fontSize: "12px",
                        }}
                      >
                        Communication
                      </Typography>
                      <Box>
                        <Rating
                          name="half-rating"
                          defaultValue={5.0}
                          precision={0.5}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "2%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                          color: "#6F6F6F",
                          fontSize: "12px",
                        }}
                      >
                        Check-in
                      </Typography>
                      <Box>
                        <Rating
                          name="half-rating"
                          defaultValue={5.0}
                          precision={0.5}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "2%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                          color: "#6F6F6F",
                          fontSize: "12px",
                        }}
                      >
                        Accuracy
                      </Typography>
                      <Box>
                        <Rating
                          name="half-rating"
                          defaultValue={5.0}
                          precision={0.5}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "2%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                          color: "#6F6F6F",
                          fontSize: "12px",
                        }}
                      >
                        Location
                      </Typography>
                      <Box>
                        <Rating
                          name="half-rating"
                          defaultValue={5.0}
                          precision={0.5}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "2%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                          color: "#6F6F6F",
                          fontSize: "12px",
                        }}
                      >
                        Value
                      </Typography>
                      <Box>
                        <Rating
                          name="half-rating"
                          defaultValue={5.0}
                          precision={0.5}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      padding: "10px",
                      borderRadius: "5px",
                      height: "150px",
                      border: "1px solid #DBDBDB",
                    }}
                  >
                    <Stack direction="row" alignItems="center">
                      <Avatar sx={{ bgcolor: "blue" }}>CJ</Avatar>
                      <Box sx={{ paddingLeft: "10px" }}>
                        <Typography variant="h4">Jon Connington</Typography>
                        <Typography variant="body2">Jan 2021</Typography>
                      </Box>
                    </Stack>
                    <Box sx={{ paddingTop: "10px" }}>
                      <Typography variant="body1">
                        Beautiful and stylish apartment with everything you
                        need. The view is amazing and the location superb. I
                        can’t fault this property and would highly recommend. We
                        had a wonderful week at Paradise YangMing...
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
