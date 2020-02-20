import { combineReducers, createStore, applyMiddleware } from "redux";
import foodsReducer from "./foodsReducer";
import categoryReducer from "./categoryReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    foods: foodsReducer,
    category: categoryReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;