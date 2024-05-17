import { Routes, Route } from "react-router-dom"
import ContestLayout from "./components/ContestLayout";
import Layout from "./components/Layout";
import LoginPageContainer from "./components/login/LoginPageContainer";
import MainPageContainer from "./components/mainPage/MainPageContainer";
import TaskPageUnreadyContainer from "./components/TaskPageUnready/TaskPageUnreadyContainer";
import TaskRules from "./components/TaskRules/TaskRules";
import TaskPageContainer from "./components/tasks/TaskPageContainer";

function App(props) {
    console.log((new Date()).getTime());

    return (
        <div className="App" > 
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MainPageContainer/>}/>
                    <Route path="/unready" element={<TaskPageUnreadyContainer/>}/>
                    <Route path="/lucky_shapes/" element={<ContestLayout/>}>
                        <Route path="/lucky_shapes/login" element={<LoginPageContainer/>}/>
                        <Route path="/lucky_shapes/rules" element={<TaskRules/>}/>
                        <Route path="/lucky_shapes/task" element={<TaskPageContainer/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
