import React from "react";
import { useFrame } from "react-three-fiber";
import { Plane } from "../../utils";
import { message } from "antd";
import { useRef } from "react";

export default (props) => {
  const { id, position, rotation, time, direction } = props;
  let allies = new Plane("#e12");
  let key = "updatable",
    reduce = time,
    plane = useRef(),
    SYM = 0.25;
  let newPosition = position.map((v, i) =>
    i === 1 ? v : direction[i] ? v + SYM * time : v - SYM * time
  );
  useFrame(() => {
    allies.propeller.rotation.x += 0.5;
    if (reduce > 0) {
      plane.current.position.x += direction[0] ? -SYM : SYM;
      plane.current.position.z += direction[2] ? -SYM : SYM;
      reduce--;
    }
  });
  function handleClick() {
    message.loading({ content: "加载中", key });
    setTimeout(() => {
      message.success({
        content: `战斗机编号:${id};战斗机位置x:${position[0]},y:${position[1]},z:${position[2]}`,
        key,
        duration: 2,
      });
    }, 500);
  }

  return (
    <primitive
      ref={plane}
      object={allies.mesh}
      position={newPosition}
      rotation={rotation}
      onClick={handleClick}
    />
  );
};
