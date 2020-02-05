import React from "react";
import { useFrame } from "react-three-fiber";
import { Plane } from "../../utils";

export default () => {
  let allies = new Plane("#e12");
  useFrame(() => (allies.propeller.rotation.x += 0.3));
  return (
    <primitive
      object={allies.mesh}
      position={[-100, 30, -50]}
      rotation={[0, 120, 0]}
      onClick={() => {
        console.log("12345");
      }}
    />
  );
};
