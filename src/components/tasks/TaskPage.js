import NavbarContainer from "./NavbarContainer";
import TaskContainer from "./TaskContainer";
import classes from './TaskPage.module.css';
import axios from "../../axios";
import React from "react";
import Preloader from "../commons/Preloader/Preloader";

const TaskPageFunc = (props) => {
    return (
        <div className={classes.taskPage}>      
            <TaskContainer/>
            <NavbarContainer/>
        </div> 

    )
}

class TaskPage extends React.Component {
    render() {
        return (
            <>
                {this.props.isFetching? <Preloader/> :<TaskPageFunc/>}
            </>
        )
    }
}

export default TaskPage;