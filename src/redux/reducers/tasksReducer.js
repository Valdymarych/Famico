const CHANGE_TEMPORARY_ANSWER="changeTemporaryAnswer";
const CHANGE_TASK_ID="changeTaskId";
const SET_TASKS = "setTaks"
const SET_IS_FETCHING = "setIsFetching"
const START_TIMER = "startTimer"
const TICK_TIMER = "tickTimer"

let initialState = {
    tasks : [
        {
            _id : "1",
            condition: `3. Камінь кинули вертикально вгору. В момент кидання, в т. А камінь мав 
            кінетичну енергію 30 Дж. Якою буде механічна енергія каменя в верхній точці В 
            траєкторії польоту? В точці кидання потенціальна енергія каменя рівна нулю. 
            Опором повітря знехтувати`
        },
        {
            _id : "2",
            condition: `Віка побудувала вежу з кубиків. На малюнку зображено вигляд цієї вежі 
            зверху. Кожне число позначає кількість кубиків, покладених один на один у 
            відповідному стовпчику. Скільки кубиків необхідно докласти до цієї конструкції, 
            щоб отримати куб 5×5×5?`
        },
        {
            _id : "3",
            condition: `5. Дві шестерні, на які намотано нитки і прикріплено вантажі, обертаються (див. 
                мал.). Вкажіть напрям і величину швидкості другого вантажу, якщо перший 
                рухається вгору зі швидкістю 15м/с (1-вгору,2-вниз).`
        }
    ],
    taskCount : 3,
    temporaryAnswers: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
    },
    isFetching: true,
    timer: {
        time: null,
        startTime: null,
        endTime: null,
        duration: 3_600_000, // ms
    },
    taskId: 0,
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
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
                taskCount: action.tasks.length
        }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
        }
        case START_TIMER:
            let startTime=(new Date()).getTime();
            let endTime=startTime+state.timer.duration;
            return {
                ...state,
                timer: {
                    ...state.timer,
                    startTime: startTime,
                    endTime: endTime,
                    time: "1:00:00"
                }
        }
        case TICK_TIMER:
            let diff_tick=(state.timer.endTime-(new Date()).getTime())/1000;
            return {
                ...state,
                timer : {
                    ...state.timer,
                    time: Math.floor(diff_tick/60)+":"+Math.floor(diff_tick-60*Math.floor(diff_tick/60))
                }
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

export const setTasksActionCreator=(tasks)=>({
    type: SET_TASKS,
    tasks: tasks,
})

export const setIsFetchingActionCreator=(isFetching)=>({
    type: SET_IS_FETCHING,
    isFetching: isFetching,
})

export const startTimerActionCreator=()=>({
    type: START_TIMER,
})

export const tickTimerActionCreator=()=>({
    type: TICK_TIMER,
})




export default tasksReducer;