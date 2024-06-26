//const CHANGE_PHONE_NUMBER="changePhoneNumber";
const CHANGE_EMAIL="changeEmail"
const SET_USER="setUser"
const LOG_OUT="logOut"
const WRONG_EMAIL="wrongEmail"

let initialState = {
    phoneNumber: "+38 ",
    
    firstname: "{firstname}",
    lastname: "{lastname}",
    category: "{category}",
    _id: "{_id}",

    email: "",
    wrongEmail: "",
    isWrongEmail: false,
    isRegistred: false,   // доступ до решти

    wasRegistred: false,  //  доступ до finish

    registrationURL : "https://docs.google.com/forms/d/e/1FAIpQLSfyaxtE_O9c8AjgRlqpD88ASFGHqphBIrOTl__Now50_7INMw/viewform",
    reglamentURL : "https://famico-backend-afc81936fa26.herokuapp.com/uploads/reglament.pdf",
    resultsURL1 : "https://famico-backend-afc81936fa26.herokuapp.com/uploads/results1.pdf",
    resultsURL2 : "https://famico-backend-afc81936fa26.herokuapp.com/uploads/results2.pdf",
    resultsURL3 : "https://famico-backend-afc81936fa26.herokuapp.com/uploads/results3.pdf",
    startDate :  1716325200000//1716152400000 
}

const loginReducer = (state=initialState,action) => {
    switch (action.type){
        case (CHANGE_EMAIL): {
                let stateCopy = {
                    ...state,
                    email: action.newEmail,
                };
                return stateCopy;
            }
        case (WRONG_EMAIL): {
            let stateCopy = {
                ...state,
                email: "",
                wrongEmail : state.email,
                isWrongEmail: true,
            };
            return stateCopy;
        }
        case (SET_USER): {
            let stateCopy = {
                ...state,
                isWrongEmail:false,
                firstname: action.firstname,
                lastname: action.lastname,
                phoneNumber: action.phoneNumber,
                category: action.category,
                _id: action._id,
                isRegistred: true,
                wasRegistred: true,
            };
            return stateCopy;
        }
        case (LOG_OUT): {
            let stateCopy = {
                ...state,
                isWrongEmail:false,
                phoneNumber: "+38 ",
                firstname: "{firstname}",
                lastname: "{lastname}",
                category: "{category}",
                _id: "{_id}",
                email: "",
                isRegistred: false,
            };
            return stateCopy;
        }
        default:
            return state;
    }
}


export const changeEmailActionCreator = (newEmail) => ({
    type: CHANGE_EMAIL,
    newEmail: newEmail,
})

export const onWrongEmailActionCreator = () => ({
    type: WRONG_EMAIL
})

export const logOutActionCreator = () => ({
    type: LOG_OUT
})

export const setUserActionCreator = (user) => ({
    type: SET_USER,
    firstname: user.firstname,
    lastname: user.lastname,
    _id: user._id,
    phoneNumber: user.phoneNumber,
    category: user.category

})


export default loginReducer;