import styles from './TaskPage.module.css'
let Ref = (props) => {
    let buttonStyle=styles.navigation_item;
    if (props.done==="ok"){
        buttonStyle=styles.navigation_item+" "+styles.navigation_item_done
    }
    if (props.current==="ok"){
        buttonStyle=styles.navigation_item+" "+styles.navigation_item_current
    }
    return (
        <div className={styles.navigation_item_container}>
            <button className={buttonStyle} onClick={props.onClick}>{props.text}</button>
        </div>
    ); 
}
let Navbar = (props) => {
    let refs = [];
    for (let i=0; i<props.taskCount;i++){
        refs.push(<Ref onClick={()=>{props.onClickHandler(i)}} done={props.temporaryAnswers[i]===""? "bad": "ok"} current={props.taskId===i? "ok": "bad"} text={i+1} key={i}></Ref>);
    }
    return (
        <div className={styles.navigation_container}>
            <ul className={styles.navigation}>
                {refs}
            </ul>
        </div>
    )
}

export default Navbar;