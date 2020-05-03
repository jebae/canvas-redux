import { EditorAction, EditorMode, ToolType } from "../types";

// action
export const REQUEST_RENDER = "editor/REQUEST_RENDER";
export const END_RENDER = "editor/END_RENDER";
export const CHANGE_MODE = "editor/CHANGE_MODE";
export const CHANGE_TOOL_TYPE = "editor/CHANGE_TOOL_TYPE";
export const SET_BACK_CANVAS = "editor/SET_BACK_CANVAS";
export const SET_FRONT_CANVAS = "editor/SET_FRONT_CANVAS";

// action creator
export const requestRender = (): EditorAction =>
  ({ type: REQUEST_RENDER });

export const endRender = (): EditorAction =>
  ({ type: END_RENDER });

export const changeMode = (mode: EditorMode): EditorAction =>
  ({ type: CHANGE_MODE, mode });

export const changeToolType = (tool: ToolType): EditorAction =>
  ({ type: CHANGE_TOOL_TYPE, tool });

export const setBackCanvas = (element: HTMLCanvasElement): EditorAction =>
  ({ type: SET_BACK_CANVAS, element });

export const setFrontCanvas = (element: HTMLCanvasElement): EditorAction =>
  ({ type: SET_FRONT_CANVAS, element });