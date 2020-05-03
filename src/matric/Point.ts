export default class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  subtract(point: Point): Point {
    return new Point(this.x - point.x, this.y - point.y);
  }

  add(point: Point): Point {
    return new Point(this.x + point.x, this.y + point.y);
  }

  multiplyPoint(point: Point): Point {
    return new Point(this.x * point.x, this.y * point.y);
  }

  multiply(ratio: number): Point {
    return new Point(this.x * ratio, this.y * ratio);
  }

  divide(ratio: number): Point {
    return new Point(this.x / ratio, this.y / ratio);
  }

  get length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }
}