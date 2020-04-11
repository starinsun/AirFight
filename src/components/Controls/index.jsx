import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from "react-three-fiber";

extend({ OrbitControls });

const Controls = props => {
  const { camera } = useThree();
  const controls = useRef();
  useFrame(() => controls.current && controls.current.update());
  return <orbitControls ref={controls} args={[camera]} {...props} />;
};

export default Controls;
