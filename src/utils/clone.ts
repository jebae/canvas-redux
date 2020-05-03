export default function clone (target: any): any {
  return Object.assign(
    Object.create(Object.getPrototypeOf(target)),
    target
  );
}