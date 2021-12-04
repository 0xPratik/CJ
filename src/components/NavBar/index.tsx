import {Box,AppBar,Toolbar,IconButton,Button,Grid} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import "./index.css"
import logo from "../../assets/logo.png"
import { styled } from "@mui/system";
import {
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
require("@solana/wallet-adapter-react-ui/styles.css");

const ConnectWallet = styled(WalletMultiButton)({
    border: "1px solid #F5BC41",
    background:"white",
    borderRadius: 7,
    color:"#484848",
    padding: "12px 16px",
    fontSize:"12px"
  })


export default function index() {
    return (
        <Grid container direction='row' justifyContent="space-between" alignItems="center">
        <Grid item>
          <Box component="img"  alt="logo" src={logo} />
        </Grid>
        <Grid item>
        {/* <ConnectWallet>
              Connect Wallet
          </ConnectWallet> */}
        <WalletMultiButton />
        </Grid>
     </Grid>
    )
}
