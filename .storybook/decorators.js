import React, { useEffect } from "react";

import { CANVAS_CONTAINER_ID } from "../src/constants";
import { initEditor } from "../src/editor";
import { resetApp } from "../src/actions";
import store from "../src/store";

const { dispatch } = store;

export const appendToContainer = (storyFn) => {
  function EditorContainer() {
    useEffect(() => {
      initStore();
      storyFn();
    }, []);
  
    return (
      <div id={ CANVAS_CONTAINER_ID }></div>
    );
  }

  return <EditorContainer/>;
}

export const withInitEditor = (storyFn) => {
  function EditorContainer() {
    useEffect(() => {
      dispatch(resetApp());
      initEditor();
      storyFn();
    }, []);
  
    return (
      <div id={ CANVAS_CONTAINER_ID }></div>
    );
  }

  return <EditorContainer/>; 
}