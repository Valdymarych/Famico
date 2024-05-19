import { Outlet } from "react-router-dom"
import TaskPageUnreadyContainer from "./TaskPageUnready/TaskPageUnreadyContainer";
import LoginPageContainer from "./login/LoginPageContainer";
import { connect } from "react-redux"
const FinishLayoutFunc = (props) => {
    if ((new Date()).getTime()<props.startDate){
        return (
            <>
                <TaskPageUnreadyContainer/>
            </>
        )
    }
    if (!props.wasRegistred){
        return (
            <LoginPageContainer/>
        )
    }
    return (
        <>
            <Outlet/>  
        </>
    )

}

let mapStateToProps = (state) => ({
    startDate: state.login.startDate,
    wasRegistred: state.login.wasRegistred
})

let mapDispatchToProps = (dispatch) => ({

}) 

const FinishLayout = connect(mapStateToProps,mapDispatchToProps)(FinishLayoutFunc)

export default FinishLayout;