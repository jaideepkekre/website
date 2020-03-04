import { List } from "antd";
import React from "react";
import { Typography } from 'antd';





function ListMaker(props) {
    return (

        <List
        size="small"
        itemLayout="horizontal"
        dataSource={props.indata}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta  title={<div style={{color:"blue"}} >{item}</div>}/>
                  </List.Item>
                )}
    />
    )
    
}


export default ListMaker;





