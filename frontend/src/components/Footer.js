import React from "react";
import './Footer.css';
import { Typography} from "@mui/material";

const Footer=()=> {
  
  return (
    <div id='footer'>

      <Typography>
      © 2022 &nbsp;<span style={{ color: "red", marginRight: "2px" }}> X</span>Flix™ Ltd.  &nbsp;
       All rights reserved.
       </Typography>
       
     </div>
  );
}

export default Footer;