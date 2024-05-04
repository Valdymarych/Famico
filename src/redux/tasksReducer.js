const CHANGE_TEMPORARY_ANSWER="changeTemporaryAnswer";

const tasksReducer = (state,action) => {
    switch (action.type){
        case (CHANGE_TEMPORARY_ANSWER):
            state.temporaryAnswers[action.taskId] = action.newTemporaryAnswer;
            return state;
        default:
            return state;
    }
}


export const changeTemporaryAnswerActionCreator = (newTemporaryAnswer,taskId) => ({
    type: CHANGE_TEMPORARY_ANSWER,
    newTemporaryAnswer: newTemporaryAnswer,
    taskId : taskId
})


export default tasksReducer;