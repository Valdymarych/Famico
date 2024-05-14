import React from "react";
import styles from "./TaskRules.module.css"
import { Link } from "react-router-dom";

const TaskRules = (props) => {
    return (
        <div>
            <Link to="/lucky_shapes/task">
                <button className={styles.button_submit}>Почати</button>
            </Link>
        </div>
    )
}



export default TaskRules;