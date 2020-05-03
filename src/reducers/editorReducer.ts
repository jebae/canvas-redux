import {
  CHANGE_MODE,
  CHANGE_TOOL_TYPE,
  END_RENDER,
  REQUEST_RENDER,
  SET_BACK_CANVAS,
  SET_FRONT_CANVAS,
} from "../actions";
import { EditorAction, EditorMode, EditorState, ToolType } from "../types";

// initial state
const initialState: EditorState = {
  tool: ToolType.none,
  mode: EditorMode.select,
  renderRequired: false,
  backCanvas: null,
  frontCanvas: null,
};

// reducer
export default (state=initialState, action: EditorAction): EditorState => {
  switch (action.type) {
    case REQUEST_RENDER:
      return {
        ...state,
        renderRequired: true
      };
    case END_RENDER:
      return {
        ...state,
        renderRequired: false
      };
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    case CHANGE_TOOL_TYPE:
      return {
        ...state,
        tool: action.tool,
      };
    case SET_FRONT_CANVAS:
      return {
        ...state,
        frontCanvas: {
          element: action.element,
          context: action.element.getContext("2d")
        }
      };
    case SET_BACK_CANVAS:
      return {
        ...state,
        backCanvas: {
          element: action.element,
          context: action.element.getContext("2d")
        }
      };
    default:
      return state;
  }
};