import FinishPage from './FinishPage';
import { connect } from "react-redux"

let mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
    answers: state.tasks.temporaryAnswers,
    userId: state.login._id,
    taskCount: state.tasks.taskCount
})

let mapDispatchToProps = (dispatch) => ({
    
}) 

const FinishPageContainer = connect(mapStateToProps,mapDispatchToProps)(FinishPage)

export default FinishPageContainer;