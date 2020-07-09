import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import SearchReducer from "./SearchReducer";

const store = createStore(SearchReducer, applyMiddleware(thunk));

export default store;
