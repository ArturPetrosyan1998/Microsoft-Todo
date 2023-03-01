import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss'
const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.divNavlink}>
                <NavLink to="/" className={styles.navLink}>Tasks</NavLink>
            </div>
            <div className={styles.divNavlink}>
                <NavLink to="/important" className={styles.navLink}>Important</NavLink>
            </div>
            <div className={styles.divNavlink}>
                <NavLink to='/complited' className={styles.navLink}>Complited</NavLink>
            </div>
            <div className={styles.divNavlink}>
                <NavLink to="/deleted" className={styles.navLink}>Deleted</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;