import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import { increase, decrease, reset } from "./actions.js";

const myStore = createStore(reducer);

myStore.subscribe(() => {
  const res = myStore.getState();
  console.log(res);
});

myStore.dispatch(increase());
myStore.dispatch(decrease());
myStore.dispatch(reset());
