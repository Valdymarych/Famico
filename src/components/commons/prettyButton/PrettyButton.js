import { Link } from "react-router-dom"
import styles from "./PrettyButton.module.css"
const PrettyButton = (props) => {
    let style = styles.button_submit
    let base = (
        <>
            <button className={style} onClick={props.onClick} style={props.style}>
                {props.children}
            </button>
        </>
    )
    if (props.type){
        if (props.type==="a") {
            return (
                <a href={props.href}>
                    {base}
                </a>
            )
        }
        if (props.type==="link") {
            return (
                <Link to={props.to}>
                    {base}
                </Link>
            )
        }
    }
    return (
        base
    )
}

export default PrettyButton;