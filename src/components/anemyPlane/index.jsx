import React from "react";
import { useFrame } from "react-three-fiber";
import { Plane } from "../../utils";
import { message } from "antd";

export default props => {
  const { id, position, rotation } = props;
  let allies = new Plane("#e12");
  let key = "updatable";
  useFrame(() => (allies.propeller.rotation.x += 0.3));
  function handleClick() {
    message.loading({ content: "加载中", key });
    setTimeout(() => {
      message.success({
        content: `战斗机编号:${id};战斗机位置x:${position[0]},y:${position[1]},z:${position[2]}`,
        key,
        duration: 2
      });
    }, 500);
  }

  return (
    <primitive
      object={allies.mesh}
      position={position}
      rotation={rotation}
      onClick={handleClick}
    />
  );
};
