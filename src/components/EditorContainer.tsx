import React, { ReactElement, useEffect } from "react";

import { CANVAS_CONTAINER_ID } from "../constants";
import { initEditor } from "../editor";

export default function EditorContainer(): ReactElement {
  useEffect(() => {
    initEditor();
    // run editing
  }, []);

  return (
    <div id={ CANVAS_CONTAINER_ID }></div>
  );
}