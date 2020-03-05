import React from "react";

import { Descriptions } from "antd";

import { Collapse, List } from "antd";

import { Typography } from "antd";
import ListMaker from "./ListMaker";

const { Text } = Typography;

const { Panel } = Collapse;

const data_pl = ["Python", "Golang", "Java", "Javascript", "R"];
const data_q = ["RabbitMQ", "Apache Kafka", "Redis", "Apache Ignite"];

const data_web_framework = ["ReactJS"];
const data_api = [
  "Flask / Django/ AioHTTP (Python)",
  "net/http (Golang)",
  "SpringBoot  (Java)",
  "OWIN (Azure .NET)"
];

const data_ml = ["H20", "SkLearn", "Keras", "Scipy"];
const data_nlp = [
  "RASA NLU",
  "Wit.ai",
  "Telegram",
  "Gensim",
  "NLTK",
  "word2vec",
  "fasttext"
];

const data_db = ["MySQL", "Oracle"];
const data_nodb = ["MongoDB", "ElasticSearch"];
const data_bdb = ["HDFS"];
const data_engg = ["Python Pandas", "Apache Spark", "Open Refine"];
const data_gdb = ["Neo4J"];

const data_iot = ["MQTT", "Azure IoT Hub"];
const data_devops = [
  "BuidBot",
  "Jenkins",
  "Kubernetes",
  "Docker",
  "Azure Service Fabric",
  "Apache ServiceMix"
];

function ResumeDesc() {
  return (
    <div
      style={{
              
      }}
    >
      <Collapse accordion bordered={false} >
        <Panel header={<Text strong>Engineering</Text>} key="1">
          <Descriptions
            title=""
            bordered
            layout="vertical"
            size={"small"}
            column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Programming Languages">
              <ListMaker indata={data_pl} />
            </Descriptions.Item>
            <Descriptions.Item label="Queues & Caches ">
              <ListMaker indata={data_q} />
            </Descriptions.Item>
          </Descriptions>
        </Panel>

        {/*  ------------- */}

        <Panel header={<Text strong>API/UI</Text>} key="2">
          <Descriptions
            title=""
            bordered
            layout="vertical"
            size={"small"}
            column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Web Frameworks">
              <ListMaker indata={data_web_framework} />
            </Descriptions.Item>
            <Descriptions.Item label="Rest API frameworks">
              <ListMaker indata={data_api} />
            </Descriptions.Item>
          </Descriptions>
        </Panel>

        <Panel header={<Text strong>Analytics</Text>} key="3">
          <Descriptions
            title=""
            bordered
            layout="vertical"
            size={"small"}
            column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Machine Learning">
              <ListMaker indata={data_ml} />
            </Descriptions.Item>
            <Descriptions.Item label="Chatbots / NLP">
              <ListMaker indata={data_nlp} />
            </Descriptions.Item>
          </Descriptions>
        </Panel>

        {/*  ------------- */}

        <Panel header={<Text strong>Data</Text>} key="4">
          <Descriptions
            title=""
            bordered
            layout="vertical"
            size={"small"}
            column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="SQL Databases">
              <ListMaker indata={data_db} />
            </Descriptions.Item>
            <Descriptions.Item label="NoSQL Databases">
              <ListMaker indata={data_nodb} />
            </Descriptions.Item>
            <Descriptions.Item label="Graph Databases">
              <ListMaker indata={data_gdb} />
            </Descriptions.Item>
            <Descriptions.Item label="Big Data Filesystems">
              <ListMaker indata={data_bdb} />
            </Descriptions.Item>
            <Descriptions.Item label="Data Engineering">
              <ListMaker indata={data_engg} />
            </Descriptions.Item>
          </Descriptions>
        </Panel>

        {/*  ------------- */}

        <Panel header={<Text strong>System</Text>} key="5">
          <Descriptions
            title=""
            bordered
            layout="vertical"
            size={"small"}
            column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="IoT">
              <ListMaker indata={data_iot} />
            </Descriptions.Item>
            <Descriptions.Item label="DevOps / Deployment">
              <ListMaker indata={data_devops} />
            </Descriptions.Item>

            <Descriptions.Item label="Servers / Reverse Proxy">
              <ListMaker indata={["Nginx"]} />
            </Descriptions.Item>
          </Descriptions>
        </Panel>

        {/*  ------------- */}

        <Panel header={<Text strong>Enterprise</Text>} key="6">
          <Descriptions
            title=""
            bordered
            layout="vertical"
            size={"small"}
            column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Protocols">
              <ListMaker indata={["AS2"]} />
            </Descriptions.Item>
            <Descriptions.Item label="Standards">
              <ListMaker indata={["HIPPA", "EDI"]} />
            </Descriptions.Item>
          </Descriptions>
        </Panel>
      </Collapse>
    </div>
  );
}

export default ResumeDesc;
