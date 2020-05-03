import { RESET_APP } from "./../actions";
import { RootState } from "./../types";
import { combineReducers } from "redux";
import editor from "./editorReducer";
import frame from "./frameReducer";

const appReducer = combineReducers({
  editor, frame,
});

export default (state: RootState, action): RootState => {
  if (action.type === RESET_APP)
    state = undefined;
  return appReducer(state, action);
};