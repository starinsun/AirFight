import React from "react";
import style from "./style.module.css";
import ChangeScene from "./ChangeScene";
import AddAllies from "./AddAllies";
import AddAnemies from "./AddAnemy";
import Startfight from "./Startfight";
import CanclePlane from "./CanclePlane";
import { IconFont } from "../../utils";
import Lanjie from "./lanjie";
import Duikang from "./duikang";
import Zhuiji from "./zhuiji";

const Controller = () => {
  return (
    <div className={style.control}>
      <div className={style.mulu}>
        <IconFont
          type='iconmulu'
          style={{ fontSize: 30, marginTop: 8, marginRight: 10 }}
        />
        <span>控制器</span>
      </div>
      <div className={style.list}>
        <ChangeScene />
        <AddAllies />
        <AddAnemies />
        <Startfight />
        <CanclePlane />
      </div>
      <div className={style.mulu}>
        <IconFont
          type='iconmulu'
          style={{ fontSize: 30, marginTop: 8, marginRight: 10 }}
        />
        <span>作战情景</span>
      </div>
      <div className={style.list}>
        <Lanjie />
        <Duikang />
        <Zhuiji />
      </div>
    </div>
  );
};
export default Controller;
