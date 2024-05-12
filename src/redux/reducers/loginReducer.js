//const CHANGE_PHONE_NUMBER="changePhoneNumber";
const CHANGE_EMAIL="changeEmail"
let initialState = {
    phoneNumber: "+38 ",
    email: "",
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
        default:
            return state;
    }
}


export const changeEmailActionCreator = (newEmail) => ({
    type: CHANGE_EMAIL,
    newEmail: newEmail,
})


export default loginReducer;