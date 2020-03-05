import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Resumedesc from "./resumedesc";
import TL from "./timeln";
import LinkedIn from "./icard";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout style={{ background: "white"}} >
      <div style={{ background: "white", minwidth: "400px" }}>
        <Content >
        <LinkedIn tyle={{ float:"left" }}/>
          <div
            style={{
              height: "400px",
              width: "400px",
              float: "left",
              background: "white",
              paddingTop:"20px"
            }}
          >
            <TL />
          </div>
          <div
            style={{
              width: "400px",
              height: "300px",
              float: "left",
              background: "white",
              paddingTop: "20px"
            }}
          >
            <Resumedesc />
          </div>
        </Content>
        <footer style={{ backgroundColor: "white" }}></footer>
      </div>
    </Layout>
  );
}

export default App;
