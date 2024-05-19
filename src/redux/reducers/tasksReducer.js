const CHANGE_TEMPORARY_ANSWER="changeTemporaryAnswer";
const CHANGE_TASK_ID="changeTaskId";
const SET_TASKS = "setTasks"
const SET_START_TIME = "setStartTime"
const SET_IS_FETCHING = "setIsFetching"
const START_TIMER = "startTimer"
const TICK_TIMER = "tickTimer"

let initialState = {
    tasks : [],
    taskCount : 0,
    temporaryAnswers: {

    },
    isFetching: true,
    timer: {
        time: null,
        startTime: null,
        endTime: null,
        duration: 30_000, // ms
    },
    taskId: null,
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
        case SET_TASKS:{
            let temporaryAnswers = {};
            for (let i=0;i<action.tasks.length;i++){
                temporaryAnswers[i]=""
            }
            let stateCopy = {
                ...state,
                tasks: action.tasks,
                taskCount: action.tasks.length,
                temporaryAnswers: temporaryAnswers,
                taskId: 0
            }
            return stateCopy;
        }
            
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
        }
        case START_TIMER: {
            if (state.timer.startTime!=null){
                return state;
            }
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
        }
        case SET_START_TIME: {
            let endTime=action.startTime+state.timer.duration;
            let diff_tick=(endTime-(new Date()).getTime())/1000;
            let minutes=Math.floor(diff_tick/60).toString();
            let seconds=Math.floor(diff_tick-60*Math.floor(diff_tick/60)).toString()
            if (minutes.length<2){
                minutes="0"+minutes
            }
            if (seconds.length<2){
                seconds="0"+seconds
            }
            return {
                ...state,
                timer: {
                    ...state.timer,
                    startTime: action.startTime,
                    endTime: endTime,
                    time: minutes+":"+seconds
                }
            }
        }
            
        case TICK_TIMER:{
            let diff_tick=(state.timer.endTime-(new Date()).getTime())/1000;
            let minutes=Math.floor(diff_tick/60).toString();
            let seconds=Math.floor(diff_tick-60*Math.floor(diff_tick/60)).toString()
            if (minutes.length<2){
                minutes="0"+minutes
            }
            if (seconds.length<2){
                seconds="0"+seconds
            }
            return {
                ...state,
                timer : {
                    ...state.timer,
                    time: minutes+":"+seconds
                }
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
export const setStartTimeActionCreator = (startTime) => ({
    type: SET_START_TIME,
    startTime : startTime
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