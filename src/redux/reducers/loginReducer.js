//const CHANGE_PHONE_NUMBER="changePhoneNumber";
const CHANGE_EMAIL="changeEmail"
const SET_USER="setUser"
const WRONG_EMAIL="wrongEmail"

let initialState = {
    phoneNumber: "+38 ",
    
    firstname: "{firstname}",
    lastname: "{lastname}",
    _id: "{_id}",

    email: "",
    wrongEmail: "",
    isWrongEmail: false,

    registrationURL : "https://docs.google.com/forms/d/e/1FAIpQLSfyaxtE_O9c8AjgRlqpD88ASFGHqphBIrOTl__Now50_7INMw/viewform",
    reglamentURL : "https://famico-backend-afc81936fa26.herokuapp.com/uploads/reglament.pdf",
    startDate :  1816152400000+30000//1716152400000 
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
                _id: action._id
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

export const setUserActionCreator = (user) => ({
    type: SET_USER,
    firstname: user.firstname,
    lastname: user.lastname,
    _id: user._id,
    phoneNumber: user.phoneNumber,
    category: user.category

})


export default loginReducer;