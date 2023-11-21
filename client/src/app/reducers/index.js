import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import dataReducer from "./dataReducer";
import errorReducer from "./errorReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
  data: dataReducer,
  errors: errorReducer,
  login: loginReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
