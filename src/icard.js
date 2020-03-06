import React from "react";
import Resume from "./resume";
import { Card } from "antd";
import { Typography } from "antd";
import jaideepkekre from "./jaideepkekre.jpeg";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";

const { Text } = Typography;
const { Title } = Typography;
const linkedinurl = "https://www.linkedin.com/in/jaideepkekre/";
const githuburl = "https://github.com/jaideepkekre";

function LinkedIn() {
  return (
    <div>
      <div style={{ paddingLeft: "0px", paddingTop: "0px" }}>
        <div>
          <Card
            // title={<Text strong>Jaideep Kekre</Text>}
            bordered={true}
            hoverable={true}
            style={{ width: "300px" }}
            cover={
              <img
                style={{ height: "300px", width: "300px" }}
                alt="example"
                src={jaideepkekre}
              />
            }
          >
            <div style={{ paddingLeft: "40px" }}>
              <p>
                <Title level={3}>Jaideep Kekre</Title>
              </p>
            </div>
            <div style={{ fontSize: "1" }}>
              <p>Solutioning | Architecture | Engineering</p>
              <p>
                <div style={{ paddingLeft: "50px" }}>
                  <Button type="link" href={linkedinurl} target="_blank">
                    <LinkedinOutlined style={{ fontSize: 32 }} />
                  </Button>
                  <Button type="link" href={githuburl} target="_blank">
                    <GithubOutlined style={{ fontSize: 32 }} />
                  </Button>
                </div>
              </p>
            </div>
          </Card>
        </div>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "40px",
            height: "30px",
            background: "white"
          }}
        >
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default LinkedIn;
