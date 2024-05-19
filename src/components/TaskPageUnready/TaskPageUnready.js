import React from "react";
import styles from "./TaskPageUnready.module.css"
import { Link } from "react-router-dom";
import Page from "../commons/page/Page";

const TaskPageUnready = (props) => {
    return (
        <Page>
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
        </Page>
    )
}



export default TaskPageUnready;