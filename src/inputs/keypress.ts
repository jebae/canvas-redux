import { EditorMode, KeyCodes, ToolType, UnitType } from "../types";
import { addUnit, changeMode, changeToolType, requestRender, setUnitDrawing, updateUnitDrawing } from "../actions";

import store from "../store";

const { getState, dispatch } = store;

export const insertTextTyping = (e: KeyboardEvent): void => {
  const {
    editor: { mode, tool },
    frame: { unitDrawing }
  } = getState();
  if (!(
    mode === EditorMode.insert &&
    tool === ToolType.text &&
    unitDrawing && unitDrawing.type === UnitType.text
  ))
    return ;
  const attrs = { content: unitDrawing.content + e.key };
  dispatch(updateUnitDrawing(attrs));
  dispatch(requestRender());
};

export const insertTextEnd = (e: KeyboardEvent): void => {
  const {
    editor: { mode, tool },
    frame: { unitDrawing }
  } = getState();
  if (!(
    mode === EditorMode.insert &&
    tool === ToolType.text &&
    unitDrawing && unitDrawing.type === UnitType.text &&
    e.keyCode === KeyCodes.esc
  ))
    return ;
  dispatch(addUnit(unitDrawing));
  dispatch(setUnitDrawing(null));
  dispatch(changeMode(EditorMode.select));
  dispatch(changeToolType(ToolType.none));
};