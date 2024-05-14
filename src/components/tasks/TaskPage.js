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
    componentDidMount(){
        this.props.setIsFetching(true);
        axios.post(
            "/api/tasks/2",
            {
                _id: this.props._id
            }
        ).then(response => {
            if (response.data.code===3){
                this.props.setTasks(response.data.data)
                this.props.setIsFetching(false);
            }
            if (response.data.code===2){
                this.props.setTasks(response.data.data);
                this.props.setIsFetching(false);
                this.props.setStartTime(response.data.startedTime);
            }
            if (response.data.code===1){
                // redirect to results
            }
            if (response.data.code===0){
                // redirect to main
            }

        }).catch(
            (err) => {
                console.log(err);
            }
        )
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