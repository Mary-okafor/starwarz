import OverviewIcon from "../../atoms/Icons/OverviewIcon";
import PeopleIcon from "../../atoms/Icons/PeopleIcon";
import SpeciesIcon from "../../atoms/Icons/SpeciesIcon";
import StarshipIcon from "../../atoms/Icons/StarshipIcon";
import starwarsLogo from "../../atoms/AsidePanel/images/starwarsLogo.svg";
import styles from "./Navigation.module.css";

function Navigation() {

    
  return (
    <div>
      <div className={styles.navigationContainer}>
        <div  className="flex justify-center" ><img src={starwarsLogo} width={100} height={100} alt="starwars"/></div>
        
        
        <nav className="flex justify-center">
          <ul className="mt-20">
          <li className={styles.navigationList2}>
            <a href="/Overview" className={styles.navHref}>
              <OverviewIcon />
              <span className={styles.navigationSpan}>Overview</span>
            </a>
          </li>


            <li className={styles.navigationList} activeClassName="bg-enyata-lightBlue">
              <a href="/Starships" className={styles.navHref}>
                <StarshipIcon />
                <span className={styles.navigationSpan}>Starships</span>
              </a>
            </li>

            <li className={styles.navigationList}>
              <a href="/People" className={styles.navHref}>
                <PeopleIcon />
                <span className={styles.navigationSpan}>People</span>
              </a>
            </li>

            <li className={styles.navigationList}>
              <a href="/Species" className={styles.navHref}>
                <SpeciesIcon />
                <span className={styles.navigationSpan}>Species</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
