import React from "react";
import style from "./style.module.css";
import ChangeScene from "./ChangeScene";
import { IconFont } from "../../utils";

const Controller = () => {
  return (
    <div className={style.control}>
      <div className={style.mulu}>
        <IconFont
          type='icon-mulu'
          style={{ fontSize: 30, marginTop: 8, marginRight: 10 }}
        />
        <span>控制器</span>
      </div>
      <div className={style.list}>
        <ChangeScene />
      </div>
    </div>
  );
};
export default Controller;
