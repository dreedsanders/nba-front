import { createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware } from "redux";
import userReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
    userState: userReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
);

export default store;
