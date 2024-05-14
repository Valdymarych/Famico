import { Link } from "react-router-dom";
import styles from "./MainPage.module.css"
//import image from "../../images/mainPageHeader.svg"
import green_triangle from "../../images/triangle.svg"
import famico_text from "../../images/Famico_navbar.svg"
import poster from "../../images/poster.PNG"
let MainPage = (props) => {

    let direction_start = "/lucky_shapes/login"//"/unready"//"/lucky_shapes/login";

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <img src={famico_text} alt="famico" className={styles.header_image}></img>
            </header>
            <div className={styles.contest}>
                <div className={styles.contest_header}>
                    Lucky Shapes
                </div>
                <div className={styles.triangle}>
                    <img className={styles.triangle_img} src={green_triangle} alt="*"></img>
                </div>
                <div className={styles.contest_content}>
                    
                    <div className={styles.button_submit_container}>
                        <a href="https://forms.gle/NY69hKk1GNQqcGcx7">
                            <button className={styles.button_submit}>
                                РЕЄСТРАЦІЯ
                            </button>
                        </a>
                    </div>

                    <div className={styles.button_submit_container+ " "+ styles.button_login_container}>
                        <Link to={direction_start}>
                            <button className={styles.button_submit +  " " + styles.button_login}>
                                РОЗПОЧАТИ
                            </button>
                        </Link>
                    </div>



                </div>   
                <div className={styles.contest_poster}>
                    <img src={poster} alt="poster" className={styles.contest_poster_img}></img>
                </div>             
            </div>
            <div className={styles.about}>
                <div className={styles.about_header}>
                    Про нас 
                </div>
                <div className={styles.triangle}>
                    <img className={styles.triangle_img} src={green_triangle} alt="*"></img>
                </div>
                <div className={styles.about_text}>
                    <div className={styles.welcome}>
                        <h4>Вас вітає Фаміко!</h4>
                    </div>
                    Famico - це комнада амбітних та креативних учнів Львівського фізико-математичного ліцею, які були переможцями та призерами обласних та всеукраїнських оліміадах з фізики, математики та інформатики. Ми любимо точні науки і хочемо ділитися цією любов'ю з іншими.
                </div>
                <div className={styles.border_handler}></div>
            </div>

        </div>
    )
}

export default MainPage;