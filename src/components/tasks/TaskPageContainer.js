import { setIsFetchingActionCreator, setTasksActionCreator, setStartTimeActionCreator } from "../../redux/reducers/tasksReducer";
import {connect} from "react-redux"
import TaskPage from "./TaskPage";


let mapStateToProps = (state) => ({
    isFetching: state.tasks.isFetching,
    _id: state.login._id
})

let mapDispatchToProps = (dispatch) => ({
    setTasks: (tasks)=>dispatch(setTasksActionCreator(tasks)),
    setIsFetching: (isFetching)=>dispatch(setIsFetchingActionCreator(isFetching)),
    setStartTime: (startTime)=>dispatch(setStartTimeActionCreator(startTime))
})

const TaskPageContainer = connect(mapStateToProps,mapDispatchToProps)(TaskPage)

export default TaskPageContainer;