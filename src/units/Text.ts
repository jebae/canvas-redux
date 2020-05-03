import { Unit, UnitType } from "../types";

import { Point } from "../matric";

export default class Text implements Unit {
  public type: UnitType;
  public origin: Point;
  public content: string;
  public fontFamily = "Helvetica";
  public fontSize = 20;
  public fontWeight = 800;
  public fontColor = "#32a852";
  public lineHeight = 24;
  public outlineThickness = 3;
  private textBaseLine: CanvasTextBaseline = "bottom";

  constructor(content: string, origin: Point) {
    this.type = UnitType.text;
    this.content = content;
    this.origin = origin;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.fontColor;
    ctx.font = `${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
    ctx.textBaseline = this.textBaseLine;
    ctx.fillText(this.content, this.origin.x, this.origin.y);
  }
}