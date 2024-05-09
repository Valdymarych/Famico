import { Link } from "react-router-dom";
import styles from "./MainPage.module.css"
//import image from "../../images/mainPageHeader.svg"
import green_triangle from "../../images/triangle.svg"
import famico_text from "../../images/Famico_navbar.svg"
import poster from "../../images/poster.JPG"
let MainPage = (props) => {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <img src={famico_text} alt="famico" className={styles.header_image}></img>
            </header>

            <div className={styles.current}>
                <h1>Актуальний конкурс:</h1>
            </div>
            <div className={styles.about}>
                <div className={styles.about_header}>
                    Про нас: 
                </div>
                <div className={styles.triangle}>
                    <img className={styles.triangle_img} src={green_triangle} alt="*"></img>
                </div>
                <div className={styles.about_text}>
                    <div className={styles.welcome}>
                        <h4>Вас вітає Фаміко!</h4>
                    </div>
                    Текст vb rjvfylf pijpierm g'oinermg'nire'ner'oin'eornco'e rnvoernvojrnveojngr jernbglrjngelrkngtelrkn telrnf verlfn
                </div>
            </div>
            <div className={styles.contest}>
                <div className={styles.contest_header}>
                    Lucky Shapes
                </div>
                <div className={styles.triangle}>
                    <img className={styles.triangle_img} src={green_triangle} alt="*"></img>
                </div>
                <div className={styles.contest_content}>
                    <Link to="/lucky_shapes/login"> Наш перший конкурс lucky_shapes! </Link>
                    
                    <a href="https://www.youtube.com/">
                        <button className={styles.button_submit}>
                            Реєстрація
                        </button>
                        
                    </a>
                </div>   
                <div className={styles.contest_poster}>
                    <img src={poster} alt="poster"></img>
                </div>             
            </div>


        </div>
    )
}

export default MainPage;