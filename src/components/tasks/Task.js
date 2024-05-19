import React from "react"
import styles from './TaskPage.module.css'
import TimerContainer from "../commons/Timer/TimerContainer";
import lucky_shapes from "../../images/Lucky_shapes.svg"
import Preloader from "../commons/Preloader/Preloader";
import { Link } from "react-router-dom";
let Task = (props) => {


    let temporaryAnswerRef = React.createRef();
    let onChange = () => {props.onChangeHandler(temporaryAnswerRef.current.value);}
    if (props.taskId==null){
        return (
            <Preloader/>
        )
    }

    let finishButton = (
        <Link to="/lucky_shapes/finish">
            <button className={styles.finish_button}>
                Завершити
            </button>
        </Link>
    )
    let conditionClassName = props.tasks[props.taskId].photoFilename? styles.condition : styles.condition_without_img
    let photo = props.tasks[props.taskId].photoFilename? (
        <img src={props.taskPhotoURL+props.tasks[props.taskId].photoFilename} alt="умова..." className={styles.condition_img}/>
    ) : null
    console.log(props.tasks[props.taskId].photoFilename);
    console.log(props.taskPhotoURL+props.tasks[props.taskId].photoFilename);
    return (
        <>
            <header className={styles.header}>
                <img src={lucky_shapes} alt="lucky shapes" className={styles.header_image}></img>
            </header>
            <div className={styles.condition_container}>
                <p className={conditionClassName}>
                    {props.tasks[props.taskId].condition}
                </p>
                {photo}
            </div>
            <div className={styles.timer_description_container}>
                <div className={styles.timer_description}>
                    Час до завершення
                </div>
                <TimerContainer/>
                {(props.taskId===props.taskCount-1)? finishButton: null}
            </div>

            <div className={styles.answer}>
                <div className={styles.answer_description}>
                    Відповідь:
                </div>
                <input className={styles.answer_input} value={props.temporaryAnswers[props.taskId]} onChange={onChange} ref={temporaryAnswerRef}  placeholder="Введіть число"/>
            </div>

        </>
    )
}

export default Task;