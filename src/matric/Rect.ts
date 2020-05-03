import Point from "./Point";

export default class Rect {
  origin: Point
  size: Point

  constructor(x: number, y: number, w: number, h: number) {
    if (!x) { x = 0; }
    if (!y) { y = 0; }
    if (!w) { w = 0; }
    if (!h) { h = 0; }
    this.origin = new Point(x, y);
    this.size = new Point(w, h);
  }

  clone(): Rect {
    return new Rect(this.minX, this.minY, this.width, this.height);
  }

  get x(): number {
    return this.origin.x;
  }

  get y(): number {
    return this.origin.y;
  }

  get minX(): number {
    return this.origin.x;
  }

  set minX(value: number) {
    this.origin.x = value;
  }

  get minY(): number {
    return this.origin.y;
  }

  set minY(value: number) {
    this.origin.y = value;
  }

  get maxX(): number {
    return this.origin.x + this.size.x;
  }

  set maxX(value: number) {
    this.size.x = value - this.origin.x;
  }

  get maxY(): number {
    return this.origin.y + this.size.y;
  }

  set maxY(value: number) {
    this.size.y = value - this.origin.y;
  }

  get width(): number {
    return this.size.x;
  }

  set width(value: number) {
    this.size.x = value;
  }

  get height(): number {
    return this.size.y;
  }

  set height(value: number) {
    this.size.y = value;
  }

  contains(x: number, y: number): boolean {
    return this.origin.x <= x && x <= this.origin.x + this.size.x &&
      this.origin.y <= y && y <= this.origin.y + this.size.y;
  }

  get centerX(): number {
    return this.origin.x + this.width / 2;
  }

  get centerY(): number {
    return this.origin.y + this.height / 2;
  }

  get center(): Point {
    return new Point(this.origin.x + this.width / 2, this.origin.y + this.height / 2);
  }

  get rb(): Point {
    return new Point(this.origin.x + this.width, this.origin.y + this.height);
  }

  set rb(point: Point) {
    this.width = point.x - this.origin.x;
    this.height = point.y - this.origin.y;
  }

  inflate(x: number, y: number): void {
    this.origin.x -= x;
    this.origin.y -= y;
    this.size.x += x * 2;
    this.size.y += y * 2;
  }

  translate(x: number, y: number): void {
    this.origin.x += x;
    this.origin.y += y;
  }

  divide(ratio: number): void {
    this.origin = this.origin.divide(ratio);
    this.size = this.size.divide(ratio);
  }

  scale(ratio: number): void {
    this.minX *= ratio;
    this.minY *= ratio;
    this.width *= ratio;
    this.height *= ratio;
  }

  intersects(rect: Rect): boolean {
    return !(rect.minX > this.maxX ||
      rect.maxX < this.minX ||
      rect.minY > this.maxY ||
      rect.maxY < this.minY);
  }

  intersect(rect: Rect): Rect | null {
    if (this.intersects(rect)) {
      const x = Math.max(this.minX, rect.minX);
      const y = Math.max(this.minY, rect.minY);
      const maxX = Math.min(this.maxX, rect.maxX);
      const maxY = Math.min(this.maxY, rect.maxY);

      return new Rect(x, y, maxX - x, maxY - y);
    }
    return null;
  }

  normalize(): Rect {
    const x = Math.min(this.minX, this.maxX);
    const y = Math.min(this.minY, this.maxY);
    const maxX = Math.max(this.minX, this.maxX);
    const maxY = Math.max(this.minY, this.maxY);

    return new Rect(x, y, maxX - x, maxY - y);
  }

  log(title: string): void {
    console.log(title, this.minX, this.minY, this.width, this.height);
  }

  get string(): string {
    return `x: ${this.minX}, y: ${this.minY}, width: ${this.width}, height: ${this.height} `;
  }
}

export function createStableRect(x1, y1, x2, y2): Rect {
  return new Rect(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1));
}

export function distancePointToLine(r: Rect, x: number, y: number): boolean {
  const abLen = Math.sqrt(Math.pow(r.maxX - r.minX, 2) + Math.pow(r.maxY - r.minY, 2));
  const u = ((r.minX - x) * (r.minX - r.maxX) + (r.minY - y) * (r.minY - r.maxY)) / (abLen * abLen);
  const px = u * (r.maxX - r.minX) + r.minX;
  const py = u * (r.maxY - r.minY) + r.minY;
  const dist = Math.sqrt(Math.pow(x - px, 2) + Math.pow(y - py, 2));

  return dist < 6 ? true : false;
}
