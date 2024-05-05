import { combineReducers, legacy_createStore as createStore} from "redux";
import loginReducer from "./reducers/loginReducer";
import staticReducer from "./reducers/staticReducer";
import tasksReducer from "./reducers/tasksReducer";

let reducers = combineReducers({
    tasks: tasksReducer,
    login: loginReducer,
    static: staticReducer
})

let store=createStore(reducers);
window.store=store;
export default store;