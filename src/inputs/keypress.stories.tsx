import { EditorMode, ToolType } from "../types";
import { attachEventListener, insertTextBegin, insertTextEnd, insertTextTyping } from "./";
import { changeMode, changeToolType } from "../actions";

import React from "react";
import store from "../store";
import { storiesOf } from "@storybook/react";
import { withInitEditor } from "../../.storybook/decorators";

const { getState, dispatch } = store;

storiesOf("keypress", module)
  .addDecorator(withInitEditor)
  .add("insertText", () => {
    const { editor: { frontCanvas } } = getState();

    dispatch(changeMode(EditorMode.insert));
    dispatch(changeToolType(ToolType.text));
    attachEventListener(frontCanvas.element, "mousedown", insertTextBegin);
    attachEventListener(window, "keypress", insertTextTyping);
    attachEventListener(window, "keydown", insertTextEnd);
    return <></>;
  });