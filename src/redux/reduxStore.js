import { combineReducers, legacy_createStore as createStore} from "redux";
import loginReducer from "./reducers/loginReducer";
import tasksReducer from "./reducers/tasksReducer";

let reducers = combineReducers({
    tasks: tasksReducer,
    login: loginReducer,
})

let store=createStore(reducers);
window.store=store;
export default store;