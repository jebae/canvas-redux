import { changeMode, endRender, setBackCanvas, setFrontCanvas } from "../actions";
import { erase, render } from "../renderer";

import { CANVAS_CONTAINER_ID } from "./../constants";
import { EditorMode } from "../types";
import store from "../store";

const { dispatch, subscribe, getState } = store;
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 800;

const createCanvas = (width: number, height: number): void => {
  const container: HTMLElement = document.getElementById(CANVAS_CONTAINER_ID);
  const frontCanvas: HTMLCanvasElement = document.createElement("canvas");
  const backCanvas: HTMLCanvasElement = document.createElement("canvas");
  
  frontCanvas.width = width;
  frontCanvas.height = height;
  backCanvas.width = width;
  backCanvas.height = height;
  container.appendChild(frontCanvas);
  dispatch(setFrontCanvas(frontCanvas));
  dispatch(setBackCanvas(backCanvas));
};

export default (): void => {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  subscribe(() => {
    const {
      editor: { renderRequired, backCanvas, frontCanvas },
    } = getState();

    if (renderRequired) {
      erase(backCanvas);
      erase(frontCanvas);
      render();
      dispatch(endRender());
    }
  });
  dispatch(changeMode(EditorMode.select));
};