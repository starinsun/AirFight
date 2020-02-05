import React, { memo } from "react";
import style from "./style.module.css";
import { IconFont } from "../../utils";
import { useHistory } from "react-router-dom";

const Header = () => {
  const nav = useHistory();
  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <div className={style.header_Logo}>
          <span>无人机群攻防</span>
        </div>
        <div className={style.header_txt}>
          <p>博弈系统</p>
        </div>
      </div>
      <div className={style.header_Option}>
        <div className={style.header_blog}>
          <IconFont
            type='iconzhuye'
            style={{ fontSize: 30 }}
            onClick={() => {
              nav.push("/");
            }}
          />
        </div>

        <div className={style.header_life}>
          <IconFont
            type='iconweibiaoti-_fuzhi-copy-copy-copy'
            style={{ fontSize: 100 }}
            onClick={() => {
              nav.push("/admin");
            }}
          />
        </div>

        <div className={style.header_other}>
          <IconFont type='iconqita' style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
