import { changeTemporaryAnswerActionCreator } from "../../redux/reducers/tasksReducer";
import Task from "./Task";
import {connect} from "react-redux"


let mapStateToProps = (state) => ({
    tasks : state.tasks.tasks,
    temporaryAnswers : state.tasks.temporaryAnswers,
    taskId : state.tasks.taskId,
    taskCount: state.tasks.taskCount
})

let mapDispatchToProps = (dispatch) => ({
    onChangeHandler: (value)=>dispatch(changeTemporaryAnswerActionCreator(value)),
})

const TaskContainer = connect(mapStateToProps,mapDispatchToProps)(Task)

export default TaskContainer;