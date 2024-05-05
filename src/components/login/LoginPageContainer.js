import { changePhoneNumberActionCreator } from "../../redux/reducers/loginReducer";
import LoginPage from "./LoginPage";
import { connect } from "react-redux"

let mapStateToProps = (state) => ({
    phoneNumber : state.login.phoneNumber,
})

let mapDispatchToProps = (dispatch) => ({
    onPhoneNumberChangeHandler: (value)=>dispatch(changePhoneNumberActionCreator(value))
})

const LoginPageContainer = connect(mapStateToProps,mapDispatchToProps)(LoginPage);

export default LoginPageContainer;