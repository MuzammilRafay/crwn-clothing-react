import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const middlewares = [logger];
const middlewares = [];
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middlewares))
// );

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
// const store = configureStore({
//   rootReducer,
//   middleware: [logger],
// });

export const persistor = persistStore(store);
//it will maintain our store for session or localstorage
//export default { store, persistor };
