import TaskRules from './TaskRules';
import { connect } from "react-redux"
import { setIsFetchingActionCreator, setTasksActionCreator, setStartTimeActionCreator } from "../../redux/reducers/tasksReducer";
let mapStateToProps = (state) => ({
    userId: state.login._id,
    duration: state.tasks.timer.duration,
    name: state.login.firstname
})

let mapDispatchToProps = (dispatch) => ({
    setTasks: (tasks)=>dispatch(setTasksActionCreator(tasks)),
    setIsFetching: (isFetching)=>dispatch(setIsFetchingActionCreator(isFetching)),
    setStartTime: (startTime)=>dispatch(setStartTimeActionCreator(startTime))
}) 

const TaskRulesContainer = connect(mapStateToProps,mapDispatchToProps)(TaskRules)

export default TaskRulesContainer;