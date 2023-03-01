import Navigation from "./Navigation/Navigation";
import styles from "../Aside/Aside.module.scss"

const Aside = () => {
    return (
        <aside className={styles.aside}>
        <Navigation />
        </aside>
    )
}

export default Aside;