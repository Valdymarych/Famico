const CHANGE_TEMPORARY_ANSWER="changeTemporaryAnswer";
const CHANGE_TASK_ID="changeTaskId";

let initialState = {
    temporaryAnswers: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
    },
    taskId: "1",
}

const tasksReducer = (state=initialState,action) => {

    switch (action.type){
        case (CHANGE_TEMPORARY_ANSWER): {
            let stateCopy = {
                ...state,
                temporaryAnswers: {
                    ...state.temporaryAnswers,
                }
            }
            stateCopy.temporaryAnswers[stateCopy.taskId] = action.newTemporaryAnswer;
            return stateCopy;
        }
        case (CHANGE_TASK_ID): {
            let stateCopy = {
                ...state,
            }
            stateCopy.taskId=action.newTaskId;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const changeTemporaryAnswerActionCreator = (newTemporaryAnswer) => ({
    type: CHANGE_TEMPORARY_ANSWER,
    newTemporaryAnswer: newTemporaryAnswer,
})

export const changeTaskIdActionCreator = (newTaskId) => ({
    type: CHANGE_TASK_ID,
    newTaskId : newTaskId
})



export default tasksReducer;