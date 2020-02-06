import React, { memo } from "react";
import { List, Row, Col, Button } from "antd";

const Manage = () => {
  const list = [];
  return (
    <List
      header={
        <Row className='list-div'>
          <Col span={3}>
            <b>战机编号</b>
          </Col>
          <Col span={6}>
            <b>战机火力</b>
          </Col>
          <Col span={6}>
            <b>战机位置</b>
          </Col>
          <Col span={6}>
            <b>战机角度</b>
          </Col>
          <Col span={3}>
            <b>战机类型</b>
          </Col>
        </Row>
      }
      bordered
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <Row className='list-div' style={{ width: "100%" }}>
            <Col span={11}>{item.title}</Col>
            <Col span={3}>{item.tags[0]}</Col>
            <Col span={3}>{item.time}</Col>
            <Col span={3}>{item.zan}</Col>
            <Col span={4}>
              <Button type='primary'>修改</Button>
              &nbsp;
              <Button type='danger'>删除</Button>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default memo(Manage);
