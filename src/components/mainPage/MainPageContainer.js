import MainPage from './MainPage';
import { connect } from "react-redux"
let mapStateToProps = (state) => ({
    registrationURL: state.login.registrationURL,
    startDate: state.login.startDate,
    resultsURL1: state.login.resultsURL1,
    resultsURL2: state.login.resultsURL2,
    resultsURL3: state.login.resultsURL3,
})

let mapDispatchToProps = (dispatch) => ({
    
}) 

const MainPageContainer = connect(mapStateToProps,mapDispatchToProps)(MainPage)

export default MainPageContainer;