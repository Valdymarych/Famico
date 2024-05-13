import React from "react";
import styles from './Timer.module.css'

class Timer extends React.Component {
    componentDidMount(){
        this.props.startTimer();
        setInterval(() => {
            this.props.tickTimer();
        }, 500);
    }
    render(){
        return (
            <div className={styles.timer_container}>
                <p className={styles.timer}>
                    {this.props.time}
                </p>
            </div>
        )
    }
}
export default Timer;