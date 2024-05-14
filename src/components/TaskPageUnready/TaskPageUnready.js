import React from "react";
import styles from "./TaskPageUnready.module.css"
import { Link } from "react-router-dom";
import lucky_shapes from "../../images/Lucky_Shapes.svgv"

const TaskPageUnready = (props) => {
    return (
        <div className={styles.margin_container}> 
            <div className={styles.margin_left}></div>
            <div className={styles.main}>
                <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
                <div className={styles.info1}>
                    Конкурс проводеться 20-21 травня
                </div>
                <div className={styles.info2}>
                    Реєстрація до 19 травня включно
                </div>
                <div className={styles.reglament}>
                    <a href="https://famico-backend-afc81936fa26.herokuapp.com/uploads/reglament.pdf">Регламент конкурсу</a>
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