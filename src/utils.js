import { Icon } from "antd";
import { Object3D, BoxGeometry, MeshPhongMaterial, Mesh } from "three";

export const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1362423_5e5jpnxrnaq.js"
});

export function Plane(color) {
  this.mesh = new Object3D();
  this.color = color;
  let geomCockpit = new BoxGeometry(8, 5, 5, 1, 1, 1);
  let matCockpit = new MeshPhongMaterial({
    color: this.color,
    flatShading: true
  });
  geomCockpit.vertices[4].y -= 1;
  geomCockpit.vertices[4].z += 2;
  geomCockpit.vertices[5].y -= 1;
  geomCockpit.vertices[5].z -= 2;
  geomCockpit.vertices[6].y += 3;
  geomCockpit.vertices[6].z += 2;
  geomCockpit.vertices[7].y += 3;
  geomCockpit.vertices[7].z -= 2;
  let cockpit = new Mesh(geomCockpit, matCockpit);
  cockpit.castShadow = true;
  cockpit.receiveShadow = true;
  this.mesh.add(cockpit);

  let geoEngine = new BoxGeometry(2, 5, 5, 1, 1, 1);
  let matEngine = new MeshPhongMaterial({ color: "#eee", flatShading: true });
  let engine = new Mesh(geoEngine, matEngine);
  engine.position.x = 4;
  engine.castShadow = true;
  engine.receiveShadow = true;
  this.mesh.add(engine);

  let geomTailPlane = new BoxGeometry(1.5, 2, 0.5, 1, 1, 1);
  let matTailPlane = new MeshPhongMaterial({
    color: this.color,
    flatShading: true
  });
  let tailPlane = new Mesh(geomTailPlane, matTailPlane);
  tailPlane.position.set(-3.5, 2.5, 0);
  tailPlane.castShadow = true;
  tailPlane.receiveShadow = true;
  this.mesh.add(tailPlane);

  let geomSideWing = new BoxGeometry(4, 0.8, 13, 1, 1, 1);
  let matSideWing = new MeshPhongMaterial({
    color: this.color,
    flatShading: true
  });
  let sideWing = new Mesh(geomSideWing, matSideWing);
  sideWing.castShadow = true;
  sideWing.receiveShadow = true;
  this.mesh.add(sideWing);

  let geomPropeller = new BoxGeometry(2, 1, 1, 1, 1, 1);
  let matPropeller = new MeshPhongMaterial({
    color: "#355",
    flatShading: true
  });
  this.propeller = new Mesh(geomPropeller, matPropeller);
  this.propeller.castShadow = true;
  this.propeller.receiveShadow = true;

  let geomBlade = new BoxGeometry(0.1, 10, 2, 1, 1, 1);
  let matBlade = new MeshPhongMaterial({
    color: "#462",
    flatShading: true
  });
  let blade = new Mesh(geomBlade, matBlade);
  blade.position.set(0.8, 0, 0);
  blade.castShadow = true;
  blade.receiveShadow = true;
  this.propeller.add(blade);
  this.propeller.position.set(5, 0, 0);
  this.mesh.add(this.propeller);
}
