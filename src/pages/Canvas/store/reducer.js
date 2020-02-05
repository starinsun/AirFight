import { fromJS } from "immutable";
import { CHANGE_SCENE, ADD_ALLIES, ADD_ANEMIES } from "./constant";

const defaultState = fromJS({
  scene: ["sea", "sand"],
  allies: [],
  anemies: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SCENE:
      return state.set("scene", action.data);
    case ADD_ALLIES:
      return state.set("allies", action.data);
    case ADD_ANEMIES:
      return state.set("anemies", action.data);
    default:
      return state;
  }
};
