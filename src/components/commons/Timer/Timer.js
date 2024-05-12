import React from "react";

class Timer extends React.Component {
    componentDidMount(){
        this.props.startTimer();
        setInterval(() => {
            this.props.tickTimer();
        }, 500);
    }
    render(){
        return (
            <div>
                {this.props.time}
            </div>
        )
    }
}
export default Timer;