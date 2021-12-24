import { actionCreator } from "./redux";
import { DECREASE, INCREASE, RESET } from "./actionType";

export const increase = () => actionCreator(INCREASE);
export const decrease = () => actionCreator(DECREASE);
export const reset = () => actionCreator(RESET);
