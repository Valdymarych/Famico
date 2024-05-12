import NavbarContainer from "./NavbarContainer";
import TaskContainer from "./TaskContainer";
import classes from './TaskPage.module.css';
import axios from "../../axios";
import React from "react";
import Preloader from "../commons/Preloader/Preloader";
import TimerContainer from "../commons/Timer/TimerContainer";

const TaskPageFunc = (props) => {
    return (
        <div className={classes.taskPage}>        
            <TaskContainer/>
            <NavbarContainer/>
            <TimerContainer/>
        </div> 

    )
}

class TaskPage extends React.Component {
    componentDidMount(){
        this.props.setIsFetching(true);
        axios.get(
            "/api/tasks/2"
        ).then(response => {
            this.props.setTasks(response.data.data)
            this.props.setIsFetching(false);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching? <Preloader/> :<TaskPageFunc/>}
            </>
        )
    }
}

export default TaskPage;