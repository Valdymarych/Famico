
import { connect } from "react-redux"
import { startTimerActionCreator, tickTimerActionCreator } from "../../../redux/reducers/tasksReducer";
import Timer from "./Timer";

let mapStateToProps = (state) => ({
    time : state.tasks.timer.time,
})

let mapDispatchToProps = (dispatch) => ({
    startTimer: () => {dispatch(startTimerActionCreator())},
    tickTimer:  () => {dispatch(tickTimerActionCreator())},
})

const TimerContainer = connect(mapStateToProps,mapDispatchToProps)(Timer);

export default TimerContainer;