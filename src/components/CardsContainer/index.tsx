import { Box, Stack, Link, Grid, Typography } from "@mui/material";
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


import { useCallback, useRef,useMemo } from "react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import { Connection } from "@metaplex/js";
import { getSuggestedQuery } from "@testing-library/react";
import {getUri} from "../../service/nftaccount"
import { useReducer,useState,useEffect } from "react";
import { useWallet,useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { getJSDocReturnTag } from "typescript";
import React from 'react'
export interface CardContainerProps {
  explore: boolean;
}
interface NftDataType {
  image: string;
  name:string;
  description:string;
  attributes:NftDataAttributes[];
  
}
interface NftDataAttributes{
  trait_type:string;
  value:string;
}


export default function CardContainer(props: CardContainerProps) {
  const nftDataRef = useRef<NftDataType[]>([])
  const [myPublicKey,setMyPublicKey] = useState('');
  function uriCallBack(data:string) {
    const parserData:NftDataType = JSON.parse(data)
    setMyPublicKey('')
    nftDataRef.current = [...nftDataRef.current,parserData]
    setMyPublicKey(wallet.publicKey?.toBase58()as string)
  }
  
  const wallet =  useWallet();
  var myKey='publickey';
  useEffect(() =>{
   const getAll=async()=>{
    //setMyPublicKey(myKey as string)
     if(!wallet.publicKey)
     {
      return
     }
     else
     {
      console.log(wallet.publicKey?.toBase58())
        myKey=wallet.publicKey?.toBase58() as string;
        
     }
     
     
    const connection = new Connection('devnet');
    // const ownerPublickey = '9CMBEAtt2NCo4gXrAB2MmRhhhmk3Mr842hqbLxN4moek';
    const nftsMetaData =  await Metadata.findDataByOwner(connection, myKey);
    const nftlist = nftsMetaData.map(nft=>nft.data.uri)
    for(var nftUri of nftlist){
      getUri(nftUri,uriCallBack);
      
    }
    
   }
    getAll()
    },[wallet.publicKey?.toBase58(),myKey]);

     //https://xouhzctvpfmgav3ywgj5g57wmbfvwxqkl7tbgjkjr53qmz27fq4q.arweave.net/u6h8inV5WGBXeLGT03f2YEtbXgpf5hMlSY93BmdfLDk?ext=png


  
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
       
      {nftDataRef.current.map((nftData,i)=>
        <Grid key={i} item xs={12} md={4}>
          <Card
            imageSrc={nftData?.image}
            date={nftData?.attributes.find(attr=>attr.trait_type==="Check In")?.value}
            hotelName={nftData?.name}
            price={props.explore ? "$103.00" : "2.99 TKT"}
            location={
              props.explore ? "Arthur Ashe Stadium" : "Taipei · beach nearbay"
            }
            likes={props.explore ? "300" : "231"}
          />
        </Grid>
      
        )}
        </Grid>
    </Box>
  );
}
