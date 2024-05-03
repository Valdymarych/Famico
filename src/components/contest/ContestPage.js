import { Link } from "react-router-dom";

let ContestPage = (props) => {
    return (
        <div>
            <h1>Wellcome to Contest!</h1>
            <Link to="/lucky_shapes/task/1">Завдання</Link>
        </div>
    )
}

export default ContestPage;