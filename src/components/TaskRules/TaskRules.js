import React from "react";
import styles from "./TaskRules.module.css"
import {  useNavigate } from "react-router-dom";
import axios from "../../axios";
import Page from "../commons/page/Page";

const TaskRules = (props) => {
    let navigate = useNavigate();
    let onFinish = async () => {
        navigate("/lucky_shapes/finish")
    }
    let onStart = async () => {
        props.setIsFetching(true);
        axios.post(
            "/api/tasks/",
            {
                _id: props.userId,
            }
        ).then(response => {
            if (response.data.code===3){
                props.setTasks(response.data.data)
                props.setIsFetching(false);
                props.setStartTime((new Date()).getTime());
                navigate('/lucky_shapes/task')
                setTimeout(() => {
                    onFinish()
                }, props.duration);
            }
            if (response.data.code===2){
                props.setTasks(response.data.data);
                props.setIsFetching(false);
                props.setStartTime(response.data.startedTime);
                navigate('/lucky_shapes/task')
                setTimeout(() => {
                    onFinish()
                }, props.duration-((new Date()).getTime()-response.data.startedTime));
            }
            if (response.data.code===1){
                navigate('/')
            }
            if (response.data.code===0){
                navigate('/')
            }
            if (response.data.code===4){
                navigate('/unready')
            }
            if (response.data.code===5){
                navigate('/lucky_shapes/finish')
            }
        }).catch(err => {
            navigate('/')
        })  
    }
    return (
        <Page>
            <div>
                <div className={styles.greeting}>
                    Вітаємо {props.name}!
                </div>
                <div className={styles.paragraph_2}>
                    <div className={styles.paragraph_2_header}>
                        Завдання оцінюються наступним чином:
                    </div>
                    <ul className={styles.paragraph_2_list}>
                        <li className={styles.paragraph_2_item}>1-7 завдання - 1 бал</li>
                        <li className={styles.paragraph_2_item}>8-15 завдання - 2 бали</li>
                        <li className={styles.paragraph_2_item}>16-20 завдання - 3 бали</li>
                    </ul>
                </div>
                <div  className={styles.paragraph_3}>
                    <div  className={styles.paragraph_3_header}>
                        Правила:
                    </div>
                    <ul  className={styles.paragraph_3_list}>
                        <li className={styles.paragraph_3_item}>Заборонено використовувати сторонні джерела інформації</li>
                        <li className={styles.paragraph_3_item}>Заборонено використання калькулятора чи допоміжних програм</li>
                        <li className={styles.paragraph_3_item}>Заборонено фотографування завдань під час проходження конкурсу</li>
                    </ul>
                </div>
                <div className={styles.paragraph_1}>
                    На виконання завдань дається 1 година, після вичерпання часу конкурс автоматично завершується
                </div>
            </div>
            <div>
                <button className={styles.button_submit} onClick={onStart}>Почати</button>
            </div>
        </Page>
    )
}



export default TaskRules;