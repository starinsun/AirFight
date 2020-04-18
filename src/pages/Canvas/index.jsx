import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import Box from "../../components/Box";
import Allies from "../../components/alliesPlane/index";
import Anemy from "../../components/anemyPlane/index";
import Controller from "../../components/Controller/index";
import Bullet from "../../components/bullet";
import Stats from "stats.js";
import { useSelector } from "react-redux";

extend({ OrbitControls });
/**
 * 状态栏，样式更改，添加节点
 */
export const stats = new Stats();
stats.showPanel(0);
stats.domElement.className = "stats";
stats.domElement.style.cssText =
  "position: fixed; top: 84px; left: 20px; cursor: pointer; opacity: 0.9; z-index: 10000;";
document.body.appendChild(stats.dom);
/**
 * 添加控制器元素
 */
const Controls = (props) => {
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
  /**
   * //TODO: 这里拿到store的数据并往下传，这里有：
   * path: 拿到场景
   * allies和anemies: 拿到战机
   * startfight: 开始作战
   */
  const path = useSelector((state) => state.getIn(["canvas", "scene"])).toJS();
  const allies = useSelector((state) =>
    state.getIn(["canvas", "allies"])
  ).toJS();
  const anemies = useSelector((state) =>
    state.getIn(["canvas", "anemies"])
  ).toJS();
  const startfight = useSelector((state) =>
    state.getIn(["canvas", "startfight"])
  );

  return (
    <div style={{ flex: 1, display: "flex" }}>
      <Canvas
        style={{ width: "80%", height: "82vh", margin: 20 }}
        camera={{ position: [0, 0, 150] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* // FIXME:可以操作界面的必要元素 */}
        <Controls enableDamping rotateSpeed={0.3} dampingFactor={0.1} />
        <Box path={path} />
        {/*
         * // TODO:需要修改的地方，目前是根据store中存储的无人机状态安置战机
         *  根据无人机的位置确定子弹的位置等
         */}
        {allies.length
          ? allies.map((item) => (
              <Allies
                key={item.id}
                id={item.id}
                position={item.position}
                rotation={item.rotation}
                direction={item.direction}
                time={item.time}
              />
            ))
          : null}
        {anemies.length
          ? anemies.map((item) => (
              <Anemy
                key={item.id}
                id={item.id}
                position={item.position}
                rotation={item.rotation}
                direction={item.direction}
                time={item.time}
              />
            ))
          : null}
        {anemies.length && allies.length
          ? anemies.map((item, key) => {
              if (key % 2 === 1) {
                return (
                  <Bullet
                    key={item.id}
                    position={item.position}
                    target={allies[key].position}
                    startfight={startfight}
                  />
                );
              } else {
                return (
                  <Bullet
                    key={item.id}
                    position={allies[key].position}
                    target={item.position}
                    startfight={startfight}
                  />
                );
              }
            })
          : null}
      </Canvas>
      {/* 控制器界面 */}
      <Controller />
    </div>
  );
};
