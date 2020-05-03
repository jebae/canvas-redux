import { EditorMode, ToolType } from "../types";
import { attachEventListener, insertRectangleBegin, insertRectangleMove } from "./";
import { changeMode, changeToolType } from "../actions";

import React from "react";
import store from "../store";
import { storiesOf } from "@storybook/react";
import { withInitEditor } from "../../.storybook/decorators";

const { getState, dispatch } = store;

storiesOf("mousemove", module)
  .addDecorator(withInitEditor)
  .add("insertRectangleMove", () => {
    const { editor: { frontCanvas } } = getState();

    dispatch(changeMode(EditorMode.insert));
    dispatch(changeToolType(ToolType.rectangle));
    attachEventListener(frontCanvas.element, "mousedown", insertRectangleBegin);
    attachEventListener(frontCanvas.element, "mousemove", insertRectangleMove);
    return <></>;
  });