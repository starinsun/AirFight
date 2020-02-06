import React, { memo } from "react";
import { Result, Button, message } from "antd";

const Nash = () => {
  return (
    <Result
      title='暂未开发'
      extra={
        <Button
          key='console'
          onClick={() => {
            message.warning("暂定");
          }}
        >
          暂定
        </Button>
      }
    />
  );
};

export default memo(Nash);
