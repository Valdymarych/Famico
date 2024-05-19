import {connect} from "react-redux"
import TaskPage from "./TaskPage";


let mapStateToProps = (state) => ({
    isFetching: state.tasks.isFetching,
})

let mapDispatchToProps = (dispatch) => ({

})

const TaskPageContainer = connect(mapStateToProps,mapDispatchToProps)(TaskPage)

export default TaskPageContainer;