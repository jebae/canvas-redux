import React from "react";
import { appendToContainer } from "../../.storybook/decorators";
import initEditor from "./init";
import store from "../../src/store";
import { storiesOf } from "@storybook/react";

storiesOf("Editor init", module)
  .addDecorator(appendToContainer)
  .add("init", () => {
    initEditor();
    const { editor: { frontCanvas } } = store.getState();
    console.log("width", frontCanvas.element.width, "height", frontCanvas.element.height);
    return <></>;
  });