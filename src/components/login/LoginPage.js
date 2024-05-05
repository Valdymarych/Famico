import React from "react";
import { Link } from "react-router-dom";
import styles from "../../App.module.css"
let LoginPage = (props) => {
    let phoneNumberRef=React.createRef();
    let onChange = () => {
        props.onPhoneNumberChangeHandler(phoneNumberRef.current.value);
    }
    return (
        <div className={styles.page}>
            <h1>Введіть номер телефону за яким ви реєструвались на конкурс:</h1>
            <input value={props.phoneNumber} onChange={onChange} ref={phoneNumberRef}></input>
            <Link to="/lucky_shapes/task"> Продовжити </Link>
        </div>
    )
}

export default LoginPage;