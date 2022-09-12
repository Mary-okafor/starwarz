import styles from "./NavTopArea.module.css";
import firstRectangle from "./images/firstRectangle.svg";
import PeopleIcon from "../Icons/PeopleIcon";

function NavTopArea() {
  const topNavList = [
    {
      name: "Films",
      number: 200,
      images: "./images/firstRectangle.svg",
      summary: "20 more than yesterday",
    },
    {
      name: "Starships",
      number: 200,
      images: "./images/firstRectangle.svg",
      summary: "20 more than yesterday",
    },
    {
      name: "People",
      number: "200",
      images: "./images/firstRectangle.svg",
      summary: "20 more than yesterday",
    },
    {
      name: "Species",
      images: "./images/firstRectangle.svg",
      number: "200",
      summary: "20 more than yesterday",
    },
  ];

  return (
    <div className="flex gap-24">
      {topNavList.map((topNavList) => {
        return (
          <div className={styles.navTapAreaContainer}>
            <div className={styles.navTapSecContainer}>
              <span className={styles.navTapSpan}>{topNavList.name} </span>
              <img src={firstRectangle} alt="rectangle" />
            </div>
            <div className={styles.navTapSpan}> {topNavList.number} </div>
            <div className={styles.navTapSummary}>{topNavList.summary} </div>
          </div>
        );
      })}
    </div>
  );
}

export default NavTopArea;
