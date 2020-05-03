export type InputListener = (e: MouseEvent | KeyboardEvent | InputEvent) => void;

export const enum InputType {
  mousedown="mousedown",
  mousemove="mousemove",
  mouseup="mouseup",
}