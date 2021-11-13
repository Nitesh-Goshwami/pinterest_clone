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
              src="https://cdn-user-icons.flaticon.com/57417/57417507/1636545930691.svg?token=exp=1636546831~hmac=86d5319287a0e25debd9b852d38528a4"
              alt=""
            />
          </div>
          <div>
            <h4>Name</h4>
            <div>Personal/Business</div>
            <div>xyzabc@gmail.com</div>
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
