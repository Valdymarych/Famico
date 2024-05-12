import { changeEmailActionCreator } from "../../redux/reducers/loginReducer";
import LoginPage from "./LoginPage";
import { connect } from "react-redux"

let mapStateToProps = (state) => ({
    email : state.login.email,
})

let mapDispatchToProps = (dispatch) => ({
    onEmailChangeHandler: (value)=>dispatch(changeEmailActionCreator(value))
})

const LoginPageContainer = connect(mapStateToProps,mapDispatchToProps)(LoginPage);

export default LoginPageContainer;