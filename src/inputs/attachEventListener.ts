import { InputListener } from "../types";

export default (container: HTMLElement | Window, event: string, listener: InputListener): void => {
  container.addEventListener(event, listener);
};