import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAnemiesAction } from "../../../pages/Canvas/store";
import { anemies1 } from "../../../mock";

const AddAnemies = () => {
  const [visi, setVisi] = useState(false);
  const confirmAnemies = useSelector((state) =>
    state.getIn(["canvas", "anemies"])
  ).toJS();
  const dispatch = useDispatch();
  function handleOk() {
    dispatch(addAnemiesAction(anemies1));
    setVisi(false);
  }
  return (
    <>
      <Button
        onClick={() => {
          !confirmAnemies.length
            ? setVisi(true)
            : message.error("敌军已经添加，不用重新添加");
        }}
        type='primary'>
        添加敌军
      </Button>
      <Modal
        title='有一项操作需要您确认'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}>
        <p>确定添加敌军吗？</p>
      </Modal>
    </>
  );
};

export default AddAnemies;
