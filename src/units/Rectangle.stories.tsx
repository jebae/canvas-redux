import { EditorMode, ToolType } from "../types";
import { attachEventListener, insertRectangleBegin, insertRectangleEnd, insertRectangleMove } from "../inputs";
import { changeMode, changeToolType } from "../actions";

import React from "react";
import store from "../store";
import { storiesOf } from "@storybook/react";
import { withInitEditor } from "../../.storybook/decorators";

const { getState, dispatch } = store;

storiesOf("Rectangle", module)
  .addDecorator(withInitEditor)
  .add("insert Rectangle Unit", () => {
    const { editor: { frontCanvas } } = getState();
    dispatch(changeMode(EditorMode.insert));
    dispatch(changeToolType(ToolType.rectangle));
    attachEventListener(frontCanvas.element, "mousedown", insertRectangleBegin);
    attachEventListener(frontCanvas.element, "mousemove", insertRectangleMove);
    attachEventListener(frontCanvas.element, "mouseup", insertRectangleEnd);
    return <></>;
  });