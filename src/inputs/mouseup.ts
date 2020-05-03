import { EditorMode, ToolType, UnitType } from "../types";
import { addUnit, changeMode, changeToolType, setUnitDrawing } from "../actions";

import store from "../store";

const { getState, dispatch } = store;

export const insertRectangleEnd = (e: MouseEvent): void => {
  const {
    editor: { mode, tool },
    frame: { unitDrawing }
  } = getState();
  if (!(
    mode === EditorMode.insert &&
    tool === ToolType.rectangle &&
    unitDrawing && unitDrawing.type === UnitType.rectangle
  ))
    return ;
  dispatch(addUnit(unitDrawing));
  dispatch(setUnitDrawing(null));
  dispatch(changeMode(EditorMode.select));
  dispatch(changeToolType(ToolType.none));
};