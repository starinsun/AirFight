import React, { memo } from "react";
import style from "./style.module.css";
import { IconFont } from "../../utils";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <div className={style.header_Logo}>
          <span>SYS</span>
        </div>
        <div className={style.header_txt}>
          <p>ESWang</p>
        </div>
      </div>
      <div className={style.header_Option}>
        <div className={style.header_blog}>
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />
          <span>POSTS</span>
        </div>

        <div className={style.header_life}>
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />
          LIVES
        </div>

        <div className={style.header_other}>
          <IconFont type='icon-shou' style={{ fontSize: 28 }} />~
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
