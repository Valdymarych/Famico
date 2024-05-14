import { changeEmailActionCreator, onWrongEmailActionCreator, setUserActionCreator } from "../../redux/reducers/loginReducer";
import LoginPage from "./LoginPage";
import { connect } from "react-redux"

let mapStateToProps = (state) => ({
    email : state.login.email,
    wrongEmail: state.login.wrongEmail,
    isWrongEmail: state.login.isWrongEmail,
})

let mapDispatchToProps = (dispatch) => ({
    onEmailChangeHandler: (value)=>dispatch(changeEmailActionCreator(value)),
    onWrongEmail: ()=>dispatch(onWrongEmailActionCreator()),
    setUser: (user)=>dispatch(setUserActionCreator(user))
})

const LoginPageContainer = connect(mapStateToProps,mapDispatchToProps)(LoginPage);

export default LoginPageContainer;