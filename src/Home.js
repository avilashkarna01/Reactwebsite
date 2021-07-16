import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.svg";
import Common from "./common";

const Home = () => {
return (
<>
<Common name='Enhance your knowledge with'
 imgsrc={web} visit='/services'
  btname='Get started'/>
</>

);
};
export default Home;
