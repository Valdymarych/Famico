import { Link } from "react-router-dom";
import styles from "../../App.module.css"
let ContestPage = (props) => {
    return (
        <div className={styles.page}>
            <h1>Wellcome to Contest!</h1>
            <Link to="/lucky_shapes/login">Почати завдання!</Link>
        </div>
    )
}

export default ContestPage;