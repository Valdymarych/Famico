import { changeTemporaryAnswerActionCreator } from "../../redux/reducers/tasksReducer";
import Task from "./Task";
import {connect} from "react-redux"


let mapStateToProps = (state) => ({
    condition : state.static.conditions[state.tasks.taskId],  
    temporaryAnswer : state.tasks.temporaryAnswers[state.tasks.taskId],
})

let mapDispatchToProps = (dispatch) => ({
    onChangeHandler: (value)=>dispatch(changeTemporaryAnswerActionCreator(value))
})

const TaskContainer = connect(mapStateToProps,mapDispatchToProps)(Task)

export default TaskContainer;