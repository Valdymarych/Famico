import React from "react";
import styles from "./TaskRules.module.css"
import {  useNavigate } from "react-router-dom";
import axios from "../../axios";
import lucky_shapes from "../../images/Lucky_shapes.svg"

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
        <div className={styles.margin_container}> 
            <div className={styles.margin_left}></div>
            <div className={styles.main}>
                <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
                <div>
                    <button className={styles.button_submit} onClick={onStart}>Почати</button>
                </div>

            </div>
            <div className={styles.margin_right}></div>
        </div>
    )
}



export default TaskRules;