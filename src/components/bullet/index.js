import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

function Bullet(props) {
  const mesh = useRef();
  const { startfight, position, target } = props;
  function workdis(target, position) {
    return position.map((item, key) => (target[key] - item) / 200);
  }
  let res = workdis(target, position);
  console.log(res, target, position);

  useFrame(() => {
    if (startfight && position[0] > 0 && mesh.current.position.x > target[0]) {
      mesh.current.position.x += res[0];
      mesh.current.position.y += res[1];
      mesh.current.position.z += res[2];
    }
    if (startfight && position[0] < 0 && mesh.current.position.x < target[0]) {
      mesh.current.position.x += res[0];
      mesh.current.position.y += res[1];
      mesh.current.position.z += res[2];
    }
  });
  return (
    <mesh ref={mesh} visible position={position}>
      <sphereGeometry attach='geometry' args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color='#e11' transparent />
    </mesh>
  );
}

export default Bullet;
