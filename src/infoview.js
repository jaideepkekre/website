import React from "react";
import TL from "./timeln";
import LinkedIn from "./icard";

function Infoview() {
  return (
    <div style={{maxWidth: "400px"}}>
      <div style={{ height: "600px"  }}>
        <LinkedIn />
        <TL />
      </div>      
    </div>
  );
}

export default Infoview;
