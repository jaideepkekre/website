import React from "react";
import TL from "./timeln";
import LinkedIn from "./icard";
import Resumedesc from "./resumedesc";

function Infoview() {
  return (
    <div style={{maxWidth: "400px"}}>
      <div style={{ height: "400px",  }}>
        <LinkedIn />
        <TL />
      </div>
      <Resumedesc  style={{paddingTop:"30px"}}/>
    </div>
  );
}

export default Infoview;
