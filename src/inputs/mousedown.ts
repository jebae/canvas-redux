import { EditorMode, ToolType } from "../types";
import { Rectangle, Text } from "../units";

import { Point } from "../matric";
import { setUnitDrawing } from "../actions";
import store from "../store";

const { getState, dispatch } = store;

export const insertRectangleBegin = (e: MouseEvent): void => {
  const { editor: { mode, tool } } = getState();
  if (!(mode === EditorMode.insert && tool === ToolType.rectangle))
    return ;
  const unit = new Rectangle(
    new Point(e.clientX, e.clientY),
    new Point(0, 0)
  );

  dispatch(setUnitDrawing(unit));
};

export const insertTextBegin = (e: MouseEvent): void => {
  const { editor: { mode, tool } } = getState();
  if (!(mode === EditorMode.insert && tool === ToolType.text))
    return ;
  const unit = new Text("", new Point(e.clientX, e.clientY));

  dispatch(setUnitDrawing(unit));
};