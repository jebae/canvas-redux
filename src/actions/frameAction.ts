import { FrameAction, Unit } from "../types";

// action
export const UPDATE_UNIT_DRAWING = "frame/UPDATE_UNIT_DRAWING";
export const SET_UNIT_DRAWING = "frame/SET_UNIT_DRAWING";
export const ADD_UNIT = "frame/ADD_UNIT";

// action creator
export const updateUnitDrawing = (attrs: Record<string, number | string>): FrameAction =>
  ({ type: UPDATE_UNIT_DRAWING, attrs });

export const setUnitDrawing = (unit: Unit | null): FrameAction =>
  ({ type: SET_UNIT_DRAWING, unit });

export const addUnit = (unit: Unit): FrameAction =>
  ({ type: ADD_UNIT, unit });