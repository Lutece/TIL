//reducer: 사용자가 상태를 바꾸는 로직을 담은 함수
//dispatch: 액션 객체를 보낸다.

export function createStore(reducer, middlewares = []) {
  let state;
  let handlers = [];

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }

  // middlewares.forEach((middleware = {
  //   middleware(action);
  // });

  return {
    dispatch,
    getState,
    subscribe,
  };
}

export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});
