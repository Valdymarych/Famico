const CHANGE_PHONE_NUMBER="changePhoneNumber";

let initialState = {
    phoneNumber: "+38 ",
}

const loginReducer = (state=initialState,action) => {
    switch (action.type){
        case (CHANGE_PHONE_NUMBER): {
                let stateCopy = {
                    ...state,
                    phoneNumber: action.newPhoneNumber,
                };
                return stateCopy;
            }
        default:
            return state;
    }
}


export const changePhoneNumberActionCreator = (newPhoneNumber) => ({
    type: CHANGE_PHONE_NUMBER,
    newPhoneNumber: newPhoneNumber,
})


export default loginReducer;