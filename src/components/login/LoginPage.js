import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css"
import lucky_shapes from "../../images/Lucky_shapes.svg"
let LoginPage = (props) => {
    let phoneNumberRef=React.createRef(); 
    let onChange = () => {
        props.onPhoneNumberChangeHandler(phoneNumberRef.current.value);
    }
    return (
        <div className={styles.main}>
            <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
            <div className={styles.registration}>
                <h3>Введіть номер телефону за яким було здійснено реєстрацію</h3>
                <input value={props.phoneNumber} onChange={onChange} ref={phoneNumberRef} type="phone" placeholder="+380 " className={styles.phone}/>
                <h3>Натиснувши цю кнопку конкурс буде розпочато</h3>
                <h1 className={styles.h1_good_luck}>Успіхів!</h1>
            </div>
            <div>
                <Link to="/lucky_shapes/task"> 
                    <button className={styles.button_submit}>Розпочати</button>
                </Link>
            </div>
        </div>
    )
}



export default LoginPage;