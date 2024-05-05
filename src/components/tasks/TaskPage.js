import NavbarContainer from "./NavbarContainer";
import TaskContainer from "./TaskContainer";
import classes from './TaskPage.module.css';

let TaskPage = (props) => {

    return (
        <div className={classes.taskPage}>        
            <TaskContainer/>
            <NavbarContainer/>
        </div>

    );
}

export default TaskPage;