import { fromJS } from "immutable";
import { CHANGE_SCENE } from "./constant";

const defaultState = fromJS({
  scene: ["sea", "sand"]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SCENE:
      return state.set("scene", action.data);
    default:
      return state;
  }
};
