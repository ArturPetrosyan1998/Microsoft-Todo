import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss'
const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.navLink}>Tasks</NavLink>
            <NavLink to="/important" className={styles.navLink}>Important</NavLink>
            <NavLink to='/complited' className={styles.navLink}>Complited</NavLink>
            <NavLink to="/deleted" className={styles.navLink}>Deleted</NavLink>
        </nav>
    )
}

export default Navigation;