import { CanvasState } from "./../types";

export default (canvas: CanvasState): void => {
  const { width, height } = canvas.element;
  canvas.context.clearRect(0, 0, width, height);
};