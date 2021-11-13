import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChatDropDown } from "./ChatDropDown";
import styles from "./Navbar.module.css";
import { Notification } from "./Notification";
import { UserDropDown } from "./UserDropDown";
import { useHistory } from "react-router-dom";
// import { saveData } from "../../Utils/localStorage";

const Navbar = ({ setQuery, handleClick }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const Links = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Today",
      to: "/today",
    },
  ];

  const [notificationDropDown, setnotificationDropDown] = useState(false);
  const [chatDrop, setchatDropDown] = useState(false);
  const [userDrop, setuserDropDown] = useState(false);
  const [searchIcon, setsearchIcon] = useState(true);

  const handleNotification = () => {
    setnotificationDropDown(!notificationDropDown);
    setchatDropDown(false);
    setuserDropDown(false);
  };
  const handleChatDropDown = () => {
    setchatDropDown(!chatDrop);
    setnotificationDropDown(false);
    setuserDropDown(false);
  };
  const handleUserDropDown = () => {
    setuserDropDown(!userDrop);
    setnotificationDropDown(false);
    setchatDropDown(false);
  };

  const handleset = () => {
    setsearchIcon(!searchIcon);
  };

  const handleSearch = () => {
    setQuery(search);
    //saveData("searchQuery", search);
    handleClick();
  };

  const handleHome = () => {
    history.push("/");
  };

  return (
    <div className={styles.marginNav}>
      <div className={styles.mainDiv}>
        <div
          onClick={() => {
            handleHome();
          }}
          className={styles.logoDiv}
        >
          <img
            className={styles.logo}
            src="https://cdn-icons-png.flaticon.com/128/220/220214.png"
            alt="logo"
          />
        </div>
        <div className={styles.navlink}>
          {Links.map(({ title, to }, index) => {
            return (
              <NavLink
                key={index}
                to={to}
                exact
                className={styles.navlinkItem}
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "24px",
                  width: "48px",
                  minWidth: "60px",
                }}
              >
                {title}
              </NavLink>
            );
          })}
        </div>
        <div className={styles.search} onClick={handleset}>
          {searchIcon ? (
            <div className={styles.searchIcon}>
              <svg
                class="gUZ B9u U9O kVc"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                aria-label="Search icon"
                role="img"
                fill="#767676"
              >
                <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
              </svg>
            </div>
          ) : null}

          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className={styles.inputBox}
            placeholder="Search"
          />
        </div>
        <div className={styles.notificationDiv} onClick={handleNotification}>
          <svg
            class="gUZ B9u U9O kVc"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label=""
            role="img"
            fill="#767676"
          >
            <path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z"></path>
          </svg>
        </div>
        <div className={styles.chatDiv} onClick={handleChatDropDown}>
          <svg
            class="Hn_ gUZ B9u U9O kVc"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label=""
            role="img"
            fill="#767676"
          >
            <path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path>
          </svg>
        </div>
        <div
          onClick={() => {
            history.push("/saved");
          }}
          className={styles.profileDiv}
        >
          <img
            className={styles.profileImage}
            src="https://i.pinimg.com/75x75_RS/2e/c8/07/2ec807727afae4e4fe1e0f88cf976128.jpg"
            alt="user"
          />
        </div>
        <div className={styles.userDiv} onClick={handleUserDropDown}>
          <svg
            class="gUZ B9u U9O kVc"
            height="12"
            width="12"
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label=""
            role="img"
            fill="#767676"
          >
            <path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
          </svg>
        </div>
      </div>
      <div style={{ width: "100vw", height: "600px", position: "relative" }}>
        {notificationDropDown ? (
          <Notification />
        ) : chatDrop ? (
          <ChatDropDown />
        ) : userDrop ? (
          <UserDropDown />
        ) : null}
      </div>
    </div>
  );
};

export { Navbar };
