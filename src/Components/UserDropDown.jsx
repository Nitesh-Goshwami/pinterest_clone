import styles from "./dropDown.module.css";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const UserDropDown = () => {
  const { handleAuthOut } = useContext(AuthContext);
  const history = useHistory();
  const handleOut = () => {
    handleAuthOut();
    history.push("/");
  };
  return (
    <>
      <div className={styles.user_dropdown}>
        <small>Currently in</small>
        <div className={styles.userDetails}>
          <div>
            <img
              className={styles.profile}
              src="https://i.pinimg.com/75x75_RS/2e/c8/07/2ec807727afae4e4fe1e0f88cf976128.jpg"
              alt=""
            />
          </div>
          <div>
            <div className={styles.profName}>Edward</div>
            <div>Personal/Business</div>
            <div>albartbtme@gmail.com</div>
          </div>
        </div>
        <small>Your Accounts</small>
        <h4 className={styles.othercontent}>Add Account</h4>
        <h4 className={styles.othercontent}>Convert to business</h4>
        <small>More options</small>
        <h4 className={styles.othercontent}>Setting</h4>
        <h4 className={styles.othercontent}>Tune your home feed</h4>
        <h4 className={styles.othercontent}>Install the windows app </h4>
        <h4 className={styles.othercontent}>Get help</h4>
        <h4 className={styles.othercontent}>See terms and privacy</h4>
        <h4
          onClick={() => {
            handleOut();
          }}
          className={styles.othercontent}
        >
          Logout
        </h4>
      </div>
    </>
  );
};

export { UserDropDown };
