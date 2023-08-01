import React, { Fragment } from "react";
import HomeMainVisual from '../components/home/HomeMainVisual';
import HomeAboutShop from "../components/home/HomeAboutShop";
import HomeAboutDrt from "../components/home/HomeAboutDrt";
import HomeFee from "../components/home/HomeFee";


export default function Home() {
  return (
    <React.Fragment>
    {/* <Header/> */}
    <HomeMainVisual/>
    <HomeAboutShop/>
    <HomeFee/>
    </React.Fragment>
  )
}
