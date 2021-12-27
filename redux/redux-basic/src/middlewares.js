
const reportCrash = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      //서버로 예외 정보 전송
    }
  };
  
  const delayAction = store => next => action => {
    const delay = action.meta?.delay;
    if(!delay) {
      return next(action);
    }
  
    const timeoutId = setTimeout(() => next(action), delay);
    return function cancel() {
      clearTimeout(timeoutId);
    }
  }
  
  const saveToLocalStorage = store => next => action => {
    if(action.meta?.localStorageKey) {
      localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
    }
  
    return next(action);
  };
  
  const printLog = store => next => action => {
    console.log(`prev state = ${JSON.stringify(store.getState())}`);
    next(action);
    console.log(`next state = ${JSON.stringify(store.getState())}`);
  };
  
  const middelware1 = store => next => action => {
    console.log('middleware1 start');
    const result = next(action);
    console.log('middelware1 end');
    return result;
  };
  
  const middelware2 = store => next => action => {
    console.log('middleware2 start');
    const result = next(action);
    console.log('middelware2 end');
    return result
  };