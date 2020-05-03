import { EditorMode, ToolType } from "../types";
import { attachEventListener, insertRectangleBegin, insertTextBegin } from "./";
import { changeMode, changeToolType } from "../actions";

import React from "react";
import store from "../store";
import { storiesOf } from "@storybook/react";
import { withInitEditor } from "../../.storybook/decorators";

const { getState, dispatch } = store;

storiesOf("mousedown", module)
  .addDecorator(withInitEditor)
  .add("insertRectangleBegin", () => {
    const { editor: { frontCanvas } } = getState();
    const listenerWrapper = (e: MouseEvent): void => {
      insertRectangleBegin(e);
      const { frame: { unitDrawing } } = getState();
      console.log("unitDrawing", unitDrawing);
    };

    dispatch(changeMode(EditorMode.insert));
    dispatch(changeToolType(ToolType.rectangle));
    attachEventListener(frontCanvas.element, "mousedown", listenerWrapper);
    return <></>;
  })
  .add("insertTextBegin", () => {
    const { editor: { frontCanvas } } = getState();
    const listenerWrapper = (e: MouseEvent): void => {
      insertTextBegin(e);
      const { frame: { unitDrawing } } = getState();
      console.log("unitDrawing", unitDrawing);
    };

    dispatch(changeMode(EditorMode.insert));
    dispatch(changeToolType(ToolType.text));
    attachEventListener(frontCanvas.element, "mousedown", listenerWrapper);
    return <></>;
  });