export const enum EditorMode {
  none="none",
  insert="insert",
  select="select",
}

export const enum ToolType {
  none="none",
  rectangle="rectangle",
  text="text",
}

export type CanvasState = {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export type EditorState = {
  tool: ToolType;
  mode: EditorMode;
  renderRequired: boolean;
  backCanvas: CanvasState | null;
  frontCanvas: CanvasState | null;
}

export type EditorAction = {
  type: string;
  mode?: EditorMode;
  tool?: ToolType;
  element?: HTMLCanvasElement;
}