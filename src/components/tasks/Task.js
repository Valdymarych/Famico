import React from "react"
import styles from './TaskPage.module.css'


let Task = (props) => {


    let temporaryAnswerRef = React.createRef();

    let onChange = () => {props.onChangeHandler(temporaryAnswerRef.current.value);}

    return (
        <>
            <div className={styles.condition}>
                <p>{props.condition}</p>
            </div>
            <div className={styles.answer}>
                <input value={props.temporaryAnswer} onChange={onChange} ref={temporaryAnswerRef}  placeholder="Введіть число"/>
            </div>
        </>
    )
}

export default Task;