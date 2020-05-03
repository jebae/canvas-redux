import { Unit, UnitType } from "../types";

import Point from "../matric/Point";
import { Rect } from "../matric";

export default class Rectangle extends Rect implements Unit {
  public type: UnitType;
  public lineWidth: number;
  public strokeStyle: string;

  constructor(origin: Point, size: Point, lineWidth=5, strokeStyle="#000000") {
    super(origin.x, origin.y, size.x, size.y);
    this.type = UnitType.rectangle;
    this.lineWidth = lineWidth;
    this.strokeStyle = strokeStyle;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.strokeStyle;
    ctx.strokeRect(this.origin.x, this.origin.y, this.size.x, this.size.y);
  }
}