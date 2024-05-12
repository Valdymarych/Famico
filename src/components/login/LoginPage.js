import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css"
import lucky_shapes from "../../images/Lucky_shapes.svg"
import axios from "../../axios";


class LoginPage extends React.Component {
    constructor (props) {
        super(props);
        this.emailRef=React.createRef()
    }

    onChange = () => {
        this.props.onEmailChangeHandler(this.emailRef.current.value);
    }

    render() {
        return (
            <div className={styles.margin_container}>
                <div className={styles.margin_left}></div>
                <div className={styles.main}>
                    <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
                    <div className={styles.registration}>
                        <div className={styles.registration_label}>Вкажіть елетронну адресу за якою ви реєструвались</div>
                        <div className={styles.registration_input_container}>
                            <input value={this.props.email} onChange={this.onChange} ref={this.emailRef} type="text" placeholder="abc@gmail.com" className={styles.registration_input}/>
                        </div>
                        <div className={styles.good_luck}>Успіхів!</div>
                    </div>
                    <div>
                        <Link to="/lucky_shapes/task">
                            <button className={styles.button_submit}>Розпочати</button>
                        </Link>
                    </div>
                    <div className={styles.warning}>
                        Натискаючи "Розпочати", Ви погоджуєтесь з <a href="https://famico-backend-afc81936fa26.herokuapp.com/uploads/reglament.pdf">правилами</a> проведення конкурсу
                    </div>
                </div>
                <div className={styles.margin_right}></div>
            </div>
        )
    }
}



export default LoginPage;