import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import LoginPageContainer from "./components/login/LoginPageContainer";
import MainPageContainer from "./components/mainPage/MainPageContainer";
import TaskPageUnreadyContainer from "./components/TaskPageUnready/TaskPageUnreadyContainer";
import TaskRules from "./components/TaskRules/TaskRules";
import TaskPageContainer from "./components/tasks/TaskPageContainer";

function App(props) {
    let tasksRoutes = (
        <>
            <Route path="/lucky_shapes/login" element={<LoginPageContainer/>}/>
            <Route path="/lucky_shapes/rules" element={<TaskRules/>}/>
            <Route path="/lucky_shapes/task" element={<TaskPageContainer/>}/>
        </>
    )
    return (
        <div className="App" > 
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MainPageContainer/>}/>
                    <Route path="/unready" element={<TaskPageUnreadyContainer/>}/>
                    {(new Date()).getTime()>props.startDate? tasksRoutes: null}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
