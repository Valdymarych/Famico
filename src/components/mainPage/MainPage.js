import styles from "./MainPage.module.css"
//import image from "../../images/mainPageHeader.svg"
import green_triangle from "../../images/triangle.svg"
import famico_text from "../../images/Famico_navbar.svg"
import poster from "../../images/poster.PNG"
import PrettyButton from "../commons/prettyButton/PrettyButton";
let MainPage = (props) => {

    let direction_start = (new Date()).getTime()>props.startDate? "/lucky_shapes/login" : "/unready";
    //"/unready"//"/lucky_shapes/login";
    let buttons = (
        <>
            <div className={styles.button_submit_container}>
                <PrettyButton type="a" href={props.registrationURL}>
                    РЕЄСТРАЦІЯ
                </PrettyButton>
            </div>

            <div className={styles.button_submit_container+ " "+ styles.button_login_container}>
                <PrettyButton type="link" to={direction_start} style={{backgroundColor: "#00386585", borderColor: "rgb(0, 4, 128)"}}>
                    РОЗПОЧАТИ
                </PrettyButton>
            </div>
        </>
    )

    buttons = (
        <>
            <div className={styles.button_submit_container+ " "+ styles.button_login_container}>
                <PrettyButton type="a" href={props.resultsURL1} style={{backgroundColor: "#00386585", borderColor: "rgb(0, 4, 128)"}}>
                    РЕЗУЛЬТАТИ 5-6
                </PrettyButton>
            </div>
            <div className={styles.button_submit_container+ " "+ styles.button_login_container}>
                <PrettyButton type="a" href={props.resultsURL2} style={{backgroundColor: "#00386585", borderColor: "rgb(0, 4, 128)"}}>
                    РЕЗУЛЬТАТИ 7-8
                </PrettyButton>
            </div>
            <div className={styles.button_submit_container+ " "+ styles.button_login_container}>
                <PrettyButton type="a" href={props.resultsURL3} style={{backgroundColor: "#00386585", borderColor: "rgb(0, 4, 128)"}}>
                    РЕЗУЛЬТАТИ 9-11
                </PrettyButton>
            </div>
        </>
    )
    let texts = (
        <div className={styles.contest_content_text}>
            <div>
                Запрошуємо вас взяти участь в учнівському, математичному, благодійному конкурсі "Lucky Shapes".
            </div>
            <div className={styles.contest_content_text_2}>
                Отримай насолоду від розвязування цікавезних задач та допоможи розвивати потенціал українських школярів!
            </div>
        </div>
    )
    texts = (
        <div className={styles.contest_content_text}>
            <div>
                Завершився математичний, благодійний конкурс "Lucky Shapes".
            </div>
            <div className={styles.contest_content_text_2}>
                Дякуємо всім учасникам, та вітаємо переможців конкурсу!
            </div>
        </div>
    )
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

                    {texts}
                    {buttons}

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
                    Famico - це команда амбітних та креативних учнів Львівського фізико-математичного ліцею, які були переможцями та призерами обласних та всеукраїнських оліміадах з фізики, математики та інформатики. Ми любимо точні науки і хочемо ділитися цією любов'ю з іншими.
                </div>
                <div className={styles.border_handler}></div>
            </div>

        </div>
    )
}

export default MainPage;