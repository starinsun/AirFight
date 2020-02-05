import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeSceneAction } from "../../../pages/Canvas/store";

const ChangeScene = () => {
  const path = useSelector(state => {
    return state.getIn(["canvas", "scene"]);
  }).toJS();
  const [visi, setVisi] = useState(false);
  const dispatch = useDispatch();
  function handleOk() {
    dispatch(changeSceneAction(path.reverse()));
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
        变更场景
      </Button>
      <Modal
        title='Basic Modal'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}
      >
        <p>确定更换场景吗？</p>
      </Modal>
    </>
  );
};

export default ChangeScene;
