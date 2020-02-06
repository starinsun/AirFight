import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addAlliesAction,
  addAnemiesAction,
  startFightAction
} from "../../../pages/Canvas/store";

const ChangeScene = () => {
  const allies = useSelector(state => state.getIn(["canvas", "allies"])).toJS();
  const anemies = useSelector(state =>
    state.getIn(["canvas", "anemies"])
  ).toJS();
  const [visi, setVisi] = useState(false);
  const dispatch = useDispatch();
  function handleOk() {
    if (allies.length || anemies.length) {
      dispatch(addAlliesAction([]));
      dispatch(addAnemiesAction([]));
      dispatch(startFightAction(false));
    } else {
      message.warning("还未添加战机，无需删除");
    }
    setVisi(false);
  }
  return (
    <>
      <Button
        onClick={() => {
          setVisi(true);
        }}
        type='primary'
      >
        删除战机
      </Button>
      <Modal
        title='有一项操作需要您确认'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}
      >
        <p>确定删除战机吗？</p>
      </Modal>
    </>
  );
};

export default ChangeScene;
