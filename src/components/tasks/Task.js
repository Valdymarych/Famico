import React from "react"
import { changeTemporaryAnswerActionCreator } from "../../redux/tasksReducer";



let Task = (props) => {

    
    let onChangeHandler=()=>{
        let action = changeTemporaryAnswerActionCreator(temporaryAnswerRef.current.value,props.taskId);
        props.dispatch(action);
    }

    let temporaryAnswerRef = React.createRef();

    return (
        <div>
            <div>
                <p>{props.condition}</p>
            </div>
            <div>
                <input value={props.temporaryAnswer} onChange={onChangeHandler} ref={temporaryAnswerRef}/>
            </div>
        </div>
    )
}

export default Task;