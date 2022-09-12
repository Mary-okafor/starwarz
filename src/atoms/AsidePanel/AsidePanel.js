import styles from "./AsidePanel.module.css"
import starwarsLogo from "./images/starwarsLogo.svg"

function AsidePanel () {
    return <div className={styles.asidePanelContainer}>
        <img src={starwarsLogo} alt="starwars"/>
       
    </div>
}

export default AsidePanel