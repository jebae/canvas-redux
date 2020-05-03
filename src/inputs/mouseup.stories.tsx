import { EditorMode, ToolType } from "../types";
import { attachEventListener, insertRectangleEnd, insertRectangleMove } from "./";
import { changeMode, changeToolType, setUnitDrawing } from "../actions";

import { Point } from "../matric";
import React from "react";
import { Rectangle } from "../units";
import store from "../store";
import { storiesOf } from "@storybook/react";
import { withInitEditor } from "../../.storybook/decorators";

const { getState, dispatch } = store;

storiesOf("mouseup", module)
  .addDecorator(withInitEditor)
  .add("insertRectangleEnd", () => {
    const { editor: { frontCanvas } } = getState();
    const rectangle = new Rectangle(
      new Point(50, 50),
      new Point(0, 0)
    );
    const listenerWrapper = (e: MouseEvent): void => {
      insertRectangleEnd(e);
      const { frame: { units, unitDrawing } } = getState();
      console.log("units", units, "unitDrawing", unitDrawing);
    };

    dispatch(changeMode(EditorMode.insert));
    dispatch(changeToolType(ToolType.rectangle));
    dispatch(setUnitDrawing(rectangle));
    attachEventListener(frontCanvas.element, "mousemove", insertRectangleMove);
    attachEventListener(frontCanvas.element, "mouseup", listenerWrapper);
    return <></>;
  });