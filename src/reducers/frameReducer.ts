import { ADD_UNIT, SET_UNIT_DRAWING, UPDATE_UNIT_DRAWING } from "../actions";
import { FrameAction, FrameState, Unit } from "../types";

import { clone } from "../utils";

// initial state
const initialState: FrameState = {
  units: [],
  unitsSelected: [],
  unitsBelowMouse: [],
  unitDrawing: null,
};

// reducer
export default (state=initialState, action: FrameAction): FrameState => {
  switch (action.type) {
    case SET_UNIT_DRAWING:
      return {
        ...state,
        unitDrawing: action.unit,
      };
    case UPDATE_UNIT_DRAWING:
      return reduceUpdateUnitDrawing(state, action);
    case ADD_UNIT:
      return {
        ...state,
        units: [ ...state.units, action.unit ]
      };
    default:
      return state;
  }
};

// reducer helper
const reduceUpdateUnitDrawing = (state: FrameState, action: FrameAction): FrameState => {
  const unitDrawing: Unit = clone(state.unitDrawing);

  Object.keys(action.attrs).forEach(attr => {
    unitDrawing[attr] = action.attrs[attr];
  });
  return {
    ...state,
    unitDrawing
  };
};