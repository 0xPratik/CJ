import { Box, Stack, Link, Grid, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "../Card/index";
import Img1 from "../../assets/home/img1.png";
import Img2 from "../../assets/home/img2.png";
import Img3 from "../../assets/home/img3.png";
import Img4 from "../../assets/home/img4.png";
import Img5 from "../../assets/home/img5.png";
import Img6 from "../../assets/home/img6.png";
import e1 from "../../assets/explore/e1.png";
import e2 from "../../assets/explore/e2.png";
import e3 from "../../assets/explore/e3.png";
import e4 from "../../assets/explore/e4.png";
import e5 from "../../assets/explore/e5.png";
import e6 from "../../assets/explore/e6.png";

import "./index.css";

export interface CardContainerProps {
  explore: boolean;
}

export default function CardContainer(props: CardContainerProps) {
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
          <Card
            imageSrc={props.explore ? e1 : Img1}
            date={props.explore ? "29 Aug - 2 Sept" : "7 Sept - 10 Sept"}
            hotelName={
              props.explore
                ? "First Week Ticket Plan in Arthur Ashe Stadium"
                : "The Joshua Tree House"
            }
            price={props.explore ? "$103.00" : "2.99 TKT"}
            location={
              props.explore ? "Arthur Ashe Stadium" : "taipei · beach nearbay"
            }
            likes={props.explore ? "300" : "231"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            imageSrc={props.explore ? e2 : Img2}
            date={props.explore ? "29 Aug - 2 Sept" : "7 Sept - 10 Sept"}
            hotelName={
              props.explore
                ? "First Week Ticket Plan in Arthur Ashe Stadium"
                : "The Joshua Tree House"
            }
            price={props.explore ? "$103.00" : "2.99 TKT"}
            location={
              props.explore ? "Arthur Ashe Stadium" : "taipei · beach nearbay"
            }
            likes={props.explore ? "300" : "231"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            imageSrc={props.explore ? e3 : Img3}
            date={props.explore ? "29 Aug - 2 Sept" : "7 Sept - 10 Sept"}
            hotelName={
              props.explore
                ? "First Week Ticket Plan in Arthur Ashe Stadium"
                : "The Joshua Tree House"
            }
            price={props.explore ? "$103.00" : "2.99 TKT"}
            location={
              props.explore ? "Arthur Ashe Stadium" : "taipei · beach nearbay"
            }
            likes={props.explore ? "300" : "231"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            imageSrc={props.explore ? e4 : Img4}
            date={props.explore ? "29 Aug - 2 Sept" : "7 Sept - 10 Sept"}
            hotelName={
              props.explore
                ? "First Week Ticket Plan in Arthur Ashe Stadium"
                : "The Joshua Tree House"
            }
            price={props.explore ? "$103.00" : "2.99 TKT"}
            location={
              props.explore ? "Arthur Ashe Stadium" : "taipei · beach nearbay"
            }
            likes={props.explore ? "300" : "231"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            imageSrc={props.explore ? e5 : Img5}
            date={props.explore ? "29 Aug - 2 Sept" : "7 Sept - 10 Sept"}
            hotelName={
              props.explore
                ? "First Week Ticket Plan in Arthur Ashe Stadium"
                : "The Joshua Tree House"
            }
            price={props.explore ? "$103.00" : "2.99 TKT"}
            location={
              props.explore ? "Arthur Ashe Stadium" : "taipei · beach nearbay"
            }
            likes={props.explore ? "300" : "231"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            imageSrc={props.explore ? e6 : Img6}
            date={props.explore ? "29 Aug - 2 Sept" : "7 Sept - 10 Sept"}
            hotelName={
              props.explore
                ? "First Week Ticket Plan in Arthur Ashe Stadium"
                : "The Joshua Tree House"
            }
            price={props.explore ? "$103.00" : "2.99 TKT"}
            location={
              props.explore ? "Arthur Ashe Stadium" : "taipei · beach nearbay"
            }
            likes={props.explore ? "300" : "231"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
