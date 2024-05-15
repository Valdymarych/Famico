import React from "react";
import styles from "./TaskPageUnready.module.css"
import { Link } from "react-router-dom";
import lucky_shapes from "../../images/Lucky_shapes.svg"

const TaskPageUnready = (props) => {
    return (
        <div className={styles.margin_container}> 
            <div className={styles.margin_left}></div>
            <div className={styles.main}>
                <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
                <div className={styles.info1}>
                    Конкурс проходить 22-23 травня
                </div>
                <div className={styles.info2}>
                    <a href={props.registrationURL} className={styles.info2_a}>Реєстрація</a> до 21 травня включно
                </div>
                <div className={styles.reglament}>
                    <a href={props.reglamentURL} className={styles.reglament_a}>Регламент конкурсу</a>
                </div>
                <div>
                    <Link to="/">
                        <button className={styles.button_submit}>Назад</button>
                    </Link>
                </div>

            </div>
            <div className={styles.margin_right}></div>
        </div>
    )
}



export default TaskPageUnready;