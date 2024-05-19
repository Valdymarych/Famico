import { Routes, Route } from "react-router-dom"
import ContestLayout from "./components/ContestLayout";
import FinishLayout from "./components/FinishLayout";
import FinishPageContainer from "./components/finishPage.js/FinishPageContainer";
import Layout from "./components/Layout";
import LoginPageContainer from "./components/login/LoginPageContainer";
import MainPageContainer from "./components/mainPage/MainPageContainer";
import TaskPageUnreadyContainer from "./components/TaskPageUnready/TaskPageUnreadyContainer";
import TaskRulesContainer from "./components/TaskRules/TaskRulesContainer";
import TaskPageContainer from "./components/tasks/TaskPageContainer";

function App(props) {
    return (
        <div className="App" > 
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MainPageContainer/>}/>
                    <Route path="/unready" element={<TaskPageUnreadyContainer/>}/>
                    <Route path="/lucky_shapes/" element={<ContestLayout/>}>
                        <Route path="/lucky_shapes/login" element={<LoginPageContainer/>}/>
                        <Route path="/lucky_shapes/rules" element={<TaskRulesContainer/>}/>
                        <Route path="/lucky_shapes/task" element={<TaskPageContainer/>}/>
                    </Route>
                    <Route path="/lucky_shapes/" element={<FinishLayout/>}>
                        <Route path="/lucky_shapes/finish" element={<FinishPageContainer/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
