import { EditorState } from "./EditorState.d";
import { FrameState } from "./FrameState.d";

export type RootState = {
  frame: FrameState;
  editor: EditorState;
}

export type RootAction = {
  type: string;
}