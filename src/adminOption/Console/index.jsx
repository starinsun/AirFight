import React, { memo } from "react";
import { Result, Icon } from "antd";

const Console = () => {
  return (
    <Result
      icon={<Icon type='smile' theme='twoTone' />}
      title='这里是后台管理系统！'
    />
  );
};

export default memo(Console);
