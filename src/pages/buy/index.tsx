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
import { useConnection } from "@solana/wallet-adapter-react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from "react";
import * as anchor from "@project-serum/anchor";
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../../utils/candy-machine";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import "./index.css";
import BuyImg from "../../assets/buy.png";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface BuyProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

export default function Buy(props: BuyProps) {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const MapsProps = {
    center: {
      lat: 25.033,
      lng: 121.5654,
    },
    zoom: 11,
  };

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

  //Candy Machine CODE:
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(true); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          // setAlertState({
          //   open: true,
          //   message: "Congratulations! Mint succeeded!",
          //   severity: "success",
          // });
        } else {
          // setAlertState({
          //   open: true,
          //   message: "Mint failed! Please try again!",
          //   severity: "error",
          // });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      // setAlertState({
      //   open: true,
      //   message,
      //   severity: "error",
      // });
    } finally {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    connection,
  ]);

  return (
    <Grid container sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <img src={BuyImg} alt="This" className="image" />
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
                  <button
                    disabled={isSoldOut || isMinting || !isActive}
                    onClick={onMint}
                    className="btn"
                  >
                    Buy now
                  </button>
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ paddingTop: "30px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h3">Reviews</Typography>
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
                  height: "200px",
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
                  padding: "20px",
                  borderRadius: "5px",
                  height: "180px",
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
                  <Typography
                    sx={{
                      fontWeight: "500px",
                      fontSize: "16px",
                      color: "#6F6F6F",
                    }}
                  >
                    Beautiful and stylish apartment with everything you need.
                    The view is amazing and the location superb. I can’t fault
                    this property and would highly recommend. We had a wonderful
                    week at Paradise YangMing...
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mt: "20px", mb: "20px" }}
        >
          Location
        </Typography>
        <Box sx={{ width: "100%", height: "50vh" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA4P1T-Tm6ImOyyefhx6epDZ4_v4Df1CbU",
            }}
            defaultCenter={MapsProps.center}
            defaultZoom={MapsProps.zoom}
          ></GoogleMapReact>
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", pt: "10px", pb: "10px", fontSize: "18px" }}
        >
          Paradise YangMing{" "}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "500", color: "#6F6F6F", fontSize: "16px" }}
        >
          The apartment is located 1 line to the sea, 2 min to walk for and get
          to the beautiful sandy beach that is 1.1 km long each way, stunning
          views to the sea from all rooms except the bathroom. Located many
          small restaurants , pubs and bars along the...
        </Typography>
      </Grid>
    </Grid>
  );
}
