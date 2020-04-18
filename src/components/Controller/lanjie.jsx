import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAlliesAction, addAnemiesAction } from "../../pages/Canvas/store";
import { allies1, allies0, anemies0, anemies1 } from "../../mock";

const AddAllies = () => {
  const [visi, setVisi] = useState(false);
  const dispatch = useDispatch();
  const confirmAllies = useSelector((state) =>
    state.getIn(["canvas", "allies"])
  ).toJS();
  function handleOk() {
    dispatch(addAlliesAction(allies0));
    dispatch(addAnemiesAction(anemies0));
    setVisi(false);
    setTimeout(() => {
      dispatch(addAlliesAction(allies1));
      dispatch(addAnemiesAction(anemies1));
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
        拦截情景
      </Button>
      <Modal
        title='有一项操作需要您确认'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}>
        <p>确定执行拦截情景吗？</p>
      </Modal>
    </>
  );
};

export default AddAllies;
