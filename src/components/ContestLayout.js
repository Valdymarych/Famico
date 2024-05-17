import { Outlet } from "react-router-dom"
import TaskPageUnreadyContainer from "./TaskPageUnready/TaskPageUnreadyContainer";
import { connect } from "react-redux"
const ContestLayoutFunc = (props) => {
    if ((new Date()).getTime()>props.startDate){
        return (
            <>
                <Outlet/>  
            </>
        )
    } else {
        return (
            <>
                <TaskPageUnreadyContainer/>
            </>
        )
    }

}

let mapStateToProps = (state) => ({
    startDate: state.login.startDate,
})

let mapDispatchToProps = (dispatch) => ({

}) 

const ContestLayout = connect(mapStateToProps,mapDispatchToProps)(ContestLayoutFunc)

export default ContestLayout;