/*
 * @Date: 2019-10-21 05:44:15
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-20 10:36:57
 * @content: I
 */
import React, { memo } from "react";
import style from "./style.module.css";

const Footer = () => (
  <div className={style.footer}>
    <div>无人机飞行博弈系统</div>
    <span>上海大学</span>
    <span>410</span>
  </div>
);

export default memo(Footer);
