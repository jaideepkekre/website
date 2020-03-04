import React from "react";
import "antd/dist/antd.css";
import Infoview from "./infoview"
import { Layout } from "antd";

const { Header, Content,Sider } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ background: "white" }}>
           <div > 
           <Infoview/>  
           </div>
           
         
      </Content>
    </Layout>
  );
}

export default App;
