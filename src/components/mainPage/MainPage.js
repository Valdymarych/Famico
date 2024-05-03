import { Link } from "react-router-dom";

let MainPage = (props) => {
    return (
        <div>
            <h1>Wellcome to Famico!</h1>
            <Link to="lucky_shapes"> Наш перший конкурс lucky_shapes! </Link>
        </div>
    )
}

export default MainPage;