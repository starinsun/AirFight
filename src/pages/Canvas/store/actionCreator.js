import { CHANGE_SCENE } from "./constant";
import { fromJS } from "immutable";

export const changeSceneAction = data => ({
  type: CHANGE_SCENE,
  data: fromJS(data)
});
