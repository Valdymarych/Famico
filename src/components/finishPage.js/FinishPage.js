import React from "react";
import styles from "./FinishPage.module.css"
import lucky_shapes from "../../images/Lucky_shapes.svg"
import axios from "../../axios";

const FinishPageFunc = (props) => {
    return (
        <div className={styles.margin_container}> 
            <div className={styles.margin_left}></div>
            <div className={styles.main}>
                <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
                <div className={styles.info1}>
                    Ви завершили участь в конкурсі!
                    Ваші результати було записано
                </div>
            </div>
            <div className={styles.margin_right}></div>
        </div>
    )
}

class FinishPage extends React.Component {
    componentDidMount() {
        let data = [];
        for (let i=0;i<this.props.taskCount;i++){
            data.push(
                {
                    taskId: this.props.tasks[i]._id,
                    answer: this.props.answers[i]
                }
            )
        }
        axios.post('/api/results',
        {
            userId : this.props.userId,
            data : data,
        }).then(
            (res) => {

            }
        ).catch(
            (err) => {
                
            }
        )
    }
    render() {
        return (
            <FinishPageFunc/>
        )
    }
}


export default FinishPage;