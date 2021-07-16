import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/vector.png";
import Common from './common';

const About = () => {

return (
<>
<Common name='Welcome to our About page'
paragraph='is an Indian multinational educational technology company, headquartered in Bihar. It was founded in 2020 by Rajat Kumar and Abhilash Karna'
 imgsrc={web} visit='/contact'
  btname='Contact now'/>
</>

);
};
export default About;
