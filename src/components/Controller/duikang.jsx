import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAlliesAction, addAnemiesAction } from "../../pages/Canvas/store";
import { allies3, allies2, anemies3, anemies2 } from "../../mock";

const AddAllies = () => {
  const [visi, setVisi] = useState(false);
  const dispatch = useDispatch();
  const confirmAllies = useSelector((state) =>
    state.getIn(["canvas", "allies"])
  ).toJS();
  function handleOk() {
    dispatch(addAlliesAction(allies2));
    dispatch(addAnemiesAction(anemies2));
    setVisi(false);
    setTimeout(() => {
      dispatch(addAlliesAction(allies3));
      dispatch(addAnemiesAction(anemies3));
    }, 8888);
  }
  return (
    <>
      <Button
        onClick={() => {
          !confirmAllies.length
            ? setVisi(true)
            : message.error("情景已经创建，不用重新启动");
        }}
        type='primary'>
        对抗情景
      </Button>
      <Modal
        title='有一项操作需要您确认'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}>
        <p>确定执行对抗情景吗？</p>
      </Modal>
    </>
  );
};

export default AddAllies;
