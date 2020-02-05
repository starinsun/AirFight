import { combineReducers } from "redux-immutable";
import { reducer as canvasReducer } from "../pages/Canvas/store";

export default combineReducers({
  canvas: canvasReducer
});
