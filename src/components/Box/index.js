import React from "react";
import { TextureLoader, DoubleSide, MeshBasicMaterial } from "three";

function Box(props) {
  const { path } = props;
  const textureLoader = new TextureLoader();
  const envMaterial = [
    new MeshBasicMaterial({
      map: textureLoader.load(require(`../../assets/${path[0]}/rt.png`)),
      side: DoubleSide
    }),
    new MeshBasicMaterial({
      map: textureLoader.load(require(`../../assets/${path[0]}/lf.png`)),
      side: DoubleSide
    }),
    new MeshBasicMaterial({
      map: textureLoader.load(require(`../../assets/${path[0]}/up.png`)),
      side: DoubleSide
    }),
    new MeshBasicMaterial({
      map: textureLoader.load(require(`../../assets/${path[0]}/dn.png`)),
      side: DoubleSide
    }),
    new MeshBasicMaterial({
      map: textureLoader.load(require(`../../assets/${path[0]}/bk.png`)),
      side: DoubleSide
    }),
    new MeshBasicMaterial({
      map: textureLoader.load(require(`../../assets/${path[0]}/ft.png`)),
      side: DoubleSide
    })
  ];
  return (
    <mesh
      scale={[500, 500, 500]}
      // onPointerOver={() => {
      //   console.log("1");
      // }}
      material={envMaterial}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
    </mesh>
  );
}

export default Box;
