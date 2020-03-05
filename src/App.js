import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Resumedesc from "./resumedesc";
import TL from "./timeln";
import LinkedIn from "./icard";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout style={{ background: "white" }}>
      <div style={{paddingTop:"30px"}}>
      </div>
      <div style={{ background: "white", minwidth: "400px", maxWidth:"850px", margin:"auto" }}>
        <Content>          
          <div
            style={{
              height: "200px",
              width: "400px",
              float: "left",
              background: "white",
              paddingTop: "0px"
            }}
          >
             <LinkedIn  />
            
          </div>
          <div
            style={{
              width: "400px",
              height: "400px",
              float: "right",
              background: "white",
              paddingTop: "0px"
            }}
          >
            <TL />
            
          </div>

          <div style={{
              width: "400px",
              height: "400px",
              float: "left",
              background: "white",
              paddingTop: "20px"
            }} >

          <Resumedesc /> 
          </div>


        </Content>
        <footer style={{ backgroundColor: "white" }}> </footer>
      </div>
    </Layout>
  );
}

export default App;
