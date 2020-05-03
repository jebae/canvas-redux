import { Unit } from "../types";
import store from "../store";

const { getState } = store;

const renderUnits = (ctx: CanvasRenderingContext2D, units: Unit[]): void => {
  units.forEach(unit => {
    unit.draw(ctx);
  });
};

const renderUnitDrawing = (ctx: CanvasRenderingContext2D, unit: Unit): void => {
  unit.draw(ctx);
};

export default (): void => {
  const {
    editor: { frontCanvas, backCanvas },
    frame: { units, unitDrawing }
  } = getState();

  renderUnits(backCanvas.context, units);
  renderUnitDrawing(backCanvas.context, unitDrawing);
  frontCanvas.context.drawImage(backCanvas.element, 0, 0);
};