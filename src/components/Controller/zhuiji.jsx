import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAlliesAction, addAnemiesAction } from "../../pages/Canvas/store";
import { allies4, allies5, anemies4, anemies5 } from "../../mock";

const AddAllies = () => {
  const [visi, setVisi] = useState(false);
  const dispatch = useDispatch();
  const confirmAllies = useSelector((state) =>
    state.getIn(["canvas", "allies"])
  ).toJS();
  function handleOk() {
    dispatch(addAlliesAction(allies4));
    dispatch(addAnemiesAction(anemies4));
    setVisi(false);
    setTimeout(() => {
      dispatch(addAlliesAction(allies5));
      dispatch(addAnemiesAction(anemies5));
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
        追击情景
      </Button>
      <Modal
        title='有一项操作需要您确认'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}>
        <p>确定执行追击情景吗？</p>
      </Modal>
    </>
  );
};

export default AddAllies;
