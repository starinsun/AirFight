import React, { useState } from "react";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAlliesAction } from "../../../pages/Canvas/store";
import { allies } from "../../../mock";

const AddAllies = () => {
  const [visi, setVisi] = useState(false);
  const dispatch = useDispatch();
  const confirmAllies = useSelector(state =>
    state.getIn(["canvas", "allies"])
  ).toJS();
  function handleOk() {
    dispatch(addAlliesAction(allies));
    setVisi(false);
  }
  return (
    <>
      <Button
        onClick={() => {
          !confirmAllies.length
            ? setVisi(true)
            : message.error("盟军已经添加，不用重新添加");
        }}
        type='primary'
      >
        添加盟军
      </Button>
      <Modal
        title='有一项操作需要您确认'
        visible={visi}
        onOk={handleOk}
        onCancel={() => {
          setVisi(false);
        }}
      >
        <p>确定添加盟军吗？</p>
      </Modal>
    </>
  );
};

export default AddAllies;
