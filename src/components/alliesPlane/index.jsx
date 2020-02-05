import React from "react";
import { useFrame } from "react-three-fiber";
import { Plane } from "../../utils";

export default props => {
  const { id, position, rotation } = props;
  let allies = new Plane("#12e");
  useFrame(() => (allies.propeller.rotation.x += 0.3));
  return (
    <primitive
      object={allies.mesh}
      position={position}
      rotation={rotation}
      onClick={() => {
        console.log(id);
      }}
    />
  );
};
