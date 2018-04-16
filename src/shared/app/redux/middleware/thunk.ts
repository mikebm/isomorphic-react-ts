const customMiddleware = (store: any) => (next: any) => (action: any) => {
  return isFunction(action)
    ? action(store.dispatch, store.getState)
    : next(action);
};
const isFunction = (action: any) => {
  return typeof action === "function";
};
export default customMiddleware;
