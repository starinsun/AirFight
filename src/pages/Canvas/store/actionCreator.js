import { CHANGE_SCENE, ADD_ALLIES, ADD_ANEMIES, START_FIGHT } from "./constant";
import { fromJS } from "immutable";

export const changeSceneAction = (data) => ({
  type: CHANGE_SCENE,
  data: fromJS(data),
});

export const addAlliesAction = (data) => ({
  type: ADD_ALLIES,
  data: fromJS(data),
});

export const addAnemiesAction = (data) => ({
  type: ADD_ANEMIES,
  data: fromJS(data),
});

export const startFightAction = (data) => ({
  type: START_FIGHT,
  data: fromJS(data),
});
