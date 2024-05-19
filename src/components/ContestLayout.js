import { Outlet } from "react-router-dom"
import TaskPageUnreadyContainer from "./TaskPageUnready/TaskPageUnreadyContainer";
import LoginPageContainer from "./login/LoginPageContainer";
import { connect } from "react-redux"
const ContestLayoutFunc = (props) => {
    if ((new Date()).getTime()<props.startDate){
        return (
            <>
                <TaskPageUnreadyContainer/>
            </>
        )
    }
    if (!props.isRegistred){
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
    isRegistred: state.login.isRegistred
})

let mapDispatchToProps = (dispatch) => ({

}) 

const ContestLayout = connect(mapStateToProps,mapDispatchToProps)(ContestLayoutFunc)

export default ContestLayout;