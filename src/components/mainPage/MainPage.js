import { Link } from "react-router-dom";
import styles from "../../App.module.css"
let MainPage = (props) => {
    return (
        <div className={styles.page}>
            <h1>Wellcome to Famico!</h1>
            <Link to="/lucky_shapes"> Наш перший конкурс lucky_shapes! </Link>
        </div>
    )
}

export default MainPage;