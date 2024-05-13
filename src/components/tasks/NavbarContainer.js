import Navbar from './Navbar';
import { connect } from "react-redux"
import { changeTaskIdActionCreator } from '../../redux/reducers/tasksReducer';

let mapStateToProps = (state) => ({
    taskCount : state.tasks.taskCount,
    taskId: state.tasks.taskId,
    temporaryAnswers: state.tasks.temporaryAnswers
})

let mapDispatchToProps = (dispatch) => ({
    onClickHandler: (value)=>dispatch(changeTaskIdActionCreator(value))
}) 

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)

export default NavbarContainer;