import React from "react";
import "antd/dist/antd.css";
import Infoview from "./infoview"
import { Layout } from "antd";
import Resumedesc from "./resumedesc";


const { Header, Content,Sider } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ background: "white" }}>
           <div >             
           <Infoview/>  
           </div>          
         
      </Content>
      <footer style={{backgroundColor:"white"}} >
        <Resumedesc />
      </footer>
    </Layout>
  );
}

export default App;
