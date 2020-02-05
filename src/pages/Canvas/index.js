import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import Box from "../../components/Box";
import Allies from "../../components/alliesPlane/index";
import Anemy from "../../components/anemyPlane/index";
import Stats from "stats.js";
import { useSelector } from "react-redux";

extend({ OrbitControls });
const stats = new Stats();
stats.showPanel(0);
stats.domElement.style.cssText =
  "position: fixed; top: 84px; left: 20px; cursor: pointer; opacity: 0.9; z-index: 10000;";
document.body.appendChild(stats.dom);
const Controls = props => {
  const { camera, gl } = useThree();
  const controls = useRef();
  useFrame(() => {
    stats.begin();
    controls.current && controls.current.update();
    stats.end();
  });
  return (
    <orbitControls ref={controls} args={[camera, gl.domElement]} {...props} />
  );
};

export default () => {
  const path = useSelector(state => {
    return state.getIn(["canvas", "scene"]);
  }).toJS();
  return (
    <Canvas
      style={{ width: "80%", height: "82vh", margin: 20 }}
      camera={{ position: [0, 0, 150] }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Controls enableDamping rotateSpeed={0.3} dampingFactor={0.1} />
      <Box path={path} />
      <Allies />
      <Anemy />
    </Canvas>
  );
};
