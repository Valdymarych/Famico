import React from "react";
import styles from "./Page.module.css"
import lucky_shapes from "../../../images/Lucky_shapes.svg"


const Page = (props) => {
    return (
        <div className={styles.margin_container}> 
            <div className={styles.margin_left}></div>
            <div className={styles.main}>
                <img src = {lucky_shapes} alt="Lucky Shapes" className={styles.image_lucky_shapes}/>
                <>
                    {props.children}
                </>
            </div>
            <div className={styles.margin_right}></div>
        </div>
    )
}

export default Page;