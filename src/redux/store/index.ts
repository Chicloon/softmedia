import { applyMiddleware, createStore } from "redux";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);
export { store };
