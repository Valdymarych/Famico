import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Task from "./Task";
import classes from './TaskPage.module.css';

let TaskPage = (props) => {
    let { id } = useParams();
    let condition = props.state.conditions[id];
    return (
        <div className={classes.taskPage}>        
            <Task condition={condition}></Task>
            <Navbar taskCount={props.state.taskCount}></Navbar>
        </div>

    );
}

export default TaskPage;