function createStore(worker) {
  let state;
  let handlers = [];

  function send(action) {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  return {
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

const myStore = createStore(worker);
myStore.subscribe(() => {
  const res = myStore.getState();
  console.log(res);
});

myStore.send({
  type: "increase",
});

myStore.send({
  type: "increase",
});

myStore.send();
