import MainPage from './MainPage';
import { connect } from "react-redux"
let mapStateToProps = (state) => ({
    registrationURL: state.login.registrationURL,
    startDate: state.login.startDate
})

let mapDispatchToProps = (dispatch) => ({
    
}) 

const MainPageContainer = connect(mapStateToProps,mapDispatchToProps)(MainPage)

export default MainPageContainer;