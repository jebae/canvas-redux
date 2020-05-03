import { EditorMode, ToolType, UnitType } from "../types";
import { requestRender, updateUnitDrawing } from "../actions";

import store from "../store" ;

const { getState, dispatch } = store;

export const insertRectangleMove = (e: MouseEvent): void => {
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
  const attrs = {
    maxX: e.clientX,
    maxY: e.clientY,
  };
  dispatch(updateUnitDrawing(attrs));
  dispatch(requestRender());
};