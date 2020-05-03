export const enum UnitType {
  rectangle,
  text,
}

export type Unit = {
  type: UnitType;
  draw: (ctx: CanvasRenderingContext2D) => void;
}