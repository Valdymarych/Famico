import React from "react";
import {  useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css"
import lucky_shapes from "../../images/Lucky_shapes.svg"
import axios from "../../axios";


let LoginPageFunc = (props) => {
    const navigate = useNavigate();
    const emailRef=React.createRef()
    const onContinue = async () => {
        axios.post(
            "/api/user",
            {
                email: props.email,
            }
        ).then(response => {
            props.setUser(response.data.user[0])
            navigate('/lucky_shapes/rules')
        }).catch(err => {
            props.onWrongEmail();
        })  
    }

    const onChange = () => {
        props.onEmailChangeHandler(emailRef.current.value);
    }
    return (
        <div className={styles.margin_container}>
            <div className={styles.margin_left}></div>
            <div className={styles.main}>
                <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
                <div className={styles.registration}>
                    <div className={styles.registration_label}>Вкажіть електронну адресу, за якою Ви реєструвались</div>
                    <div className={styles.registration_input_container}>
                        <input value={props.email} onChange={onChange} ref={emailRef} type="text" placeholder="abc@gmail.com" className={styles.registration_input}/>
                        {props.isWrongEmail?   
                        (    
                            <div className={styles.registration_wrong_email}>
                                За поштою <u>{props.wrongEmail}</u> не було здійснено реєстрації
                            </div>
                        )
                        :null}
                    </div>
                    <div className={styles.good_luck}>Успіхів!</div>
                </div>
                <div>
                    <button className={styles.button_submit} onClick={onContinue}>Розпочати</button>
                </div>
                <div className={styles.warning}>
                    Натискаючи "Розпочати", Ви погоджуєтесь з <a href={props.reglamentURL}>правилами</a> проведення конкурсу
                </div>
            </div>
            <div className={styles.margin_right}></div>
        </div>
    )
}

class LoginPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <LoginPageFunc {...this.props}/>
        )
    }
}



export default LoginPage;