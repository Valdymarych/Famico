import { setIsFetchingActionCreator, setTasksActionCreator } from "../../redux/reducers/tasksReducer";
import {connect} from "react-redux"
import TaskPage from "./TaskPage";


let mapStateToProps = (state) => ({
    isFetching: state.tasks.isFetching
})

let mapDispatchToProps = (dispatch) => ({
    setTasks: (tasks)=>dispatch(setTasksActionCreator(tasks)),
    setIsFetching: (isFetching)=>dispatch(setIsFetchingActionCreator(isFetching))
})

const TaskPageContainer = connect(mapStateToProps,mapDispatchToProps)(TaskPage)

export default TaskPageContainer;