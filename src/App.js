import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Resumedesc from "./resumedesc";
import TL from "./timeln";
import LinkedIn from "./icard";
import InstaView from "./infoview";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout style={{ background: "white" }}>
      <div style={{ paddingTop: "30px" }}></div>
      <div
        style={{
          background: "white",
          minwidth: "420px",
          maxWidth: "850px",
          margin: "auto",
          height: "auto"
        }}
      >
        <Content>
          <div
            style={{
              height: "auto",
              width: "420px",
              float: "left",
              background: "white",
              paddingTop: "0px",
              paddingLeft: "30px",
              paddingRight: "30px"
            }}
          >
            <LinkedIn />
          </div>

          <div
            style={{
              width: "420px",
              height: "auto",
              float: "right",
              background: "white",
              paddingTop: "40px",
              paddingLeft: "30px",
              paddingRight: "30px"
            }}
          >
            <TL />
          </div>

          <div
            style={{
              width: "420px",
              height: "auto",
              float: "left",
              background: "white",
              paddingTop: "20px",
              paddingLeft: "30px",
              paddingRight: "30px"
            }}
          >
            <Resumedesc />
          </div>

          <div
            style={{
              width: "420px",
              height: "auto",
              float: "left",
              background: "white",
              paddingTop: "20px",
              paddingLeft: "30px",
              paddingRight: "30px",
              margin: "auto"
            }}
          >
            <InstaView />
          </div>
        </Content>
      </div>
      <div
        style={{
          backgroundColor: "white",
          maxwidth: "400px",
          margin: "auto",
          height: "30px"
        }}
      >
        <footer
          style={{ backgroundColor: "white", width: "auto", margin: "auto" }}
        >
          Made with love by Jaideep Kekre
        </footer>
      </div>
    </Layout>
  );
}

export default App;
