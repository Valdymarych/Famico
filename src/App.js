import { Routes, Route } from "react-router-dom"
import ContestPage from "./components/contest/ContestPage";
import Layout from "./components/Layout";
import LoginPageContainer from "./components/login/LoginPageContainer";
import MainPage from "./components/mainPage/MainPage";
import TaskPage from "./components/tasks/TaskPage";
function App(props) {
    
    return (
        <div className="App"> 
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/lucky_shapes" element={<ContestPage/>}/>
                    <Route path="/lucky_shapes/login" element={<LoginPageContainer/>}/>
                    <Route path="/lucky_shapes/task" element={<TaskPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
