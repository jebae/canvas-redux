import { RootAction } from "../types";

// action
export const RESET_APP = "root/RESET_APP";

// action creator
export const resetApp = (): RootAction =>
  ({ type : RESET_APP });