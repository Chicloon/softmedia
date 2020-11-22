import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";
import salaryReduser from "./salary";

const rootReducer = combineReducers({
  form: reducerForm,
  salary: salaryReduser,
});

export default rootReducer;
