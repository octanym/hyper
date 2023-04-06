import { configureStore } from "@reduxjs/toolkit";
import _thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "../reducers/index";
import effects from "../utils/effects";
import * as plugins from "../utils/plugins";
import writeMiddleware from "./write-middleware";
// import { composeWithDevTools } from "redux-devtools-extension";
import { HyperState, HyperActions } from "../hyper";
const thunk: ThunkMiddleware<HyperState, HyperActions> = _thunk;

export default () => {
  // const enhancer = composeWithDevTools(
  //   applyMiddleware(thunk, plugins.middleware, thunk, writeMiddleware, effects)
  // );

  //  configure store applies composeWithDevTools and applyMiddleware by default
  // all that is needed is the array of middleware
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk, plugins.middleware, thunk, writeMiddleware, effects],
  });
};
