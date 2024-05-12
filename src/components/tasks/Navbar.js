import styles from './TaskPage.module.css'
let Ref = (props) => {
    let buttonStyle=styles.navItem;
    if (props.current==="ok"){
        buttonStyle=styles.navItem+" "+styles.navItemCurrent
    }
    return (
        <div className={styles.navDivItem}>
            <button className={buttonStyle} onClick={props.onClick}>{props.text}</button>
        </div>
    ); 
}
let Navbar = (props) => {
    let refs = [];
    for (let i=0; i<props.taskCount;i++){
        refs.push(<Ref onClick={()=>{props.onClickHandler(i)}} current={props.taskId===i? "ok": "bad"} text={i+1} key={i}></Ref>);
    }
    return (
        <div className={styles.navb}>
            <ul className={styles.navbar}>
                {refs}
            </ul>
        </div>
    )
}

export default Navbar;