import { Unit } from "./Unit";

export type FrameState = {
  units: Unit[];
  unitsSelected: number[];
  unitsBelowMouse: number[];
  unitDrawing: Unit | null;
}

export type FrameAction = {
  type: string;
  attrs?: Record<string, any>;
  unit?: Unit;
}