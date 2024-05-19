import React from "react";
import styles from "./FinishPage.module.css"
import axios from "../../axios";
import Page from "../commons/page/Page";
import { Link } from "react-router-dom"
const FinishPageFunc = (props) => {
    return (
        <Page>
            <div className={styles.info1}>
                Ваші результати записано!
            </div>
            <div className={styles.info1}>
                Дякуюємо що взяли участь в конкурсі
            </div>
            <div className={styles.info2}>
                Остаточні результати будуть доступні на <Link to="/">головній сторінці</Link> 24 травня
            </div>
        </Page>
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