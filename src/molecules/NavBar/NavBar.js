import styles from "./NavBar.module.css";
import notification from "./images/notification.svg";
import account from "./images/account.svg";

function NavBar() {
  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.navBarContainer}>
        <img src={notification} alt="bell" /> |
        <img src={account} alt="avatar" />
      </div>
      <div>John Doe </div>
      
    </div>
  );
}

export default NavBar;
