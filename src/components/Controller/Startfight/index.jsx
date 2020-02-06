import React, { useState } from "react";
import { Modal, Button } from "antd";
import { message, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { startFightAction } from "../../../pages/Canvas/store";

const ChangeScene = () => {
  const start = useSelector(state => {
    return state.getIn(["canvas", "startfight"]);
  });
  const allies = useSelector(state => state.getIn(["canvas", "allies"])).toJS();
  const anemies = useSelector(state =>
    state.getIn(["canvas", "anemies"])
  ).toJS();
  const [visi, setVisi] = useState(false);
  const dispatch = useDispatch();
  function handleOk() {
    if (allies.length && anemies.length) {
      dispatch(startFightAction(true));
      openNotification("bottomRight");
    } else {
      message.warning("战机尚未部署，请先部署战机");
    }
    setVisi(false);
  }
  const openNotification = placement => {
    notification.info({
      message: `作战策略`,
      description: `我方战机1有79%概率攻击敌方战机3，敌方战机4有65%概率攻击我方战机2`,
      placement
    });
  };
  return (
    <>
      <Button
        onClick={() => {
          !start ? setVisi(true) : message.error("作战已完成");
        }}
        type='primary'
      >
        作战开始
      </Button>
      <Modal
        title='有一项操作需要您确认'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}
      >
        <p>确定按照既定策略开始作战吗？</p>
      </Modal>
    </>
  );
};

export default ChangeScene;
