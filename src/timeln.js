import { Timeline } from "antd";
import React from "react";
import { Typography } from 'antd';
const { Text } = Typography;


function TL() {
  return (
    <div >
    <Timeline mode="alternate" >
      <Timeline.Item color = "blue"><Text  strong>Vaultize </Text> <br/>  <Text type={"secondary"} > Intern</Text> <br/> <i>Aug 2014 - July 2015</i></Timeline.Item>
      <Timeline.Item color = "blue"><Text strong>Launchyard </Text> <br/>  <Text type={"secondary"} > Software Engineer</Text> <br/> <i>July 2016 - Aug 2016</i></Timeline.Item>
      <Timeline.Item color = "blue"><Text strong>CAPIOT Software </Text> <br/>  <Text type={"secondary"} > Associate Consultant</Text> <br/> <i>Sep 2016 - June 2017</i></Timeline.Item>
      <Timeline.Item color = "green"><Text strong>CAPIOT Software </Text> <br/>  <Text type={"secondary"} > Data Engineer</Text> <br/> <i>July 2017 - Current</i></Timeline.Item>

    </Timeline>
    </div>
  );
}

export default TL;