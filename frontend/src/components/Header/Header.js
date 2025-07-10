import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.mainDisplay}>
            <h1 className={styles.mainTitle}>to do list</h1>
            <p className={styles.subTitle}>marque, desmarque e conquiste seus objetivos. simples assim.</p>
            <hr className={styles.line} />
        </div>
    )
}

export default Header