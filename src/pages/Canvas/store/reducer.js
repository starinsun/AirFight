import { fromJS } from "immutable";
import { CHANGE_SCENE, ADD_ALLIES, ADD_ANEMIES, START_FIGHT } from "./constant";

const defaultState = fromJS({
  scene: ["sea", "sand"],
  allies: [],
  anemies: [],
  startfight: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SCENE:
      return state.set("scene", action.data);
    case ADD_ALLIES:
      return state.set("allies", action.data);
    case ADD_ANEMIES:
      return state.set("anemies", action.data);
    case START_FIGHT:
      return state.set("startfight", action.data);
    default:
      return state;
  }
};
