import classes from './TaskPage.module.css'
import { NavLink } from "react-router-dom"
let Ref = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={props.address}>{props.index}</NavLink>
        </div>
    );
}
let Navbar = (props) => {
    let refs = [];
    for (let i=0; i<props.taskCount;i++){
        refs.push(<Ref address={"/lucky_shapes/task/"+(i+1)} index={i+1} key={i}></Ref>);
    }
    return (
        <div>
            <ul className={classes.navbar}>
                {refs}
            </ul>
        </div>
    )
}

export default Navbar;