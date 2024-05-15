import TaskPageUnready from './TaskPageUnready';
import { connect } from "react-redux"
let mapStateToProps = (state) => ({
    registrationURL: state.login.registrationURL,
    reglamentURL: state.login.reglamentURL
})

let mapDispatchToProps = (dispatch) => ({
    
}) 

const TaskPageUnreadyContainer = connect(mapStateToProps,mapDispatchToProps)(TaskPageUnready)

export default TaskPageUnreadyContainer;