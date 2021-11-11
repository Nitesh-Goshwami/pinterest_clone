import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ChatDropDown } from "./ChatDropDown"
import styles from "./Navbar.module.css"
import { Notification } from "./Notification"
import { UserDropDown } from "./UserDropDown"


const Navbar = () => {
    const Links = [{
        title: "Home",
        to: "/"
    },
    {
        title: "Today",
        to: "/today"
    }
    ]

    const [notificationDropDown, setnotificationDropDown] = useState(false);
    const [chatDrop, setchatDropDown] = useState(false);
    const [userDrop, setuserDropDown] = useState(false);
    const [searchIcon, setsearchIcon] = useState(true)

    const handleNotification = () => {
        setnotificationDropDown(!notificationDropDown)
        setchatDropDown(false)
        setuserDropDown(false)
    }
    const handleChatDropDown = () => {
        setchatDropDown(!chatDrop)
        setnotificationDropDown(false)
        setuserDropDown(false)
    }
    const handleUserDropDown = () => {
        setuserDropDown(!userDrop)
        setnotificationDropDown(false)
        setchatDropDown(false)
    }

    const handleset = () => {
        setsearchIcon(!searchIcon)
    }


    return (<>
        <div className={styles.mainDiv} >
            <div className={styles.logoDiv}>
                <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/220/220214.png" alt="logo" />
            </div>
            <div className={styles.navlink}>
                {
                    Links.map(({ title, to }, index) => {
                        return (<NavLink
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
                                minWidth: "60px"
                            }}>
                            {title}
                        </NavLink>)
                    })
                }
            </div>
            <div className={styles.search} onClick={handleset}>
                {searchIcon ? <img className={styles.searchIcon} src="https://cdn-user-icons.flaticon.com/57417/57417507/1636541450491.svg?token=exp=1636542351~hmac=0ebe029d7ca0d8233d2a8ab0c5ab2747" alt="search" /> : null}

                <input className={styles.inputBox} placeholder="Search" />
            </div>
            <div className={styles.notificationDiv} onClick={handleNotification} >
                <img className={styles.notificationImage}
                    src="https://cdn-user-icons.flaticon.com/57417/57417507/1636462955847.svg?token=exp=1636463878~hmac=9c13cad98ddb50437eb2346c03fb11c0" alt="Notification" />
            </div>
            <div className={styles.chatDiv} onClick={handleChatDropDown}>
                <img className={styles.chatImage}
                    src="https://cdn-user-icons.flaticon.com/57417/57417507/1636463038789.svg?token=exp=1636463945~hmac=de7c613dd820d529a1d7d28cf4ca0004" alt="chat" />
            </div>
            <div className={styles.profileDiv}>
                <img className={styles.profileImage}
                    src="https://cdn-user-icons.flaticon.com/57417/57417507/1636545930691.svg?token=exp=1636546831~hmac=86d5319287a0e25debd9b852d38528a4" alt="user" />
            </div>
            <div className={styles.userDiv} onClick={handleUserDropDown}>
                <img className={styles.user}
                    src="https://cdn-user-icons.flaticon.com/57417/57417507/1636554626989.svg?token=exp=1636555527~hmac=aebbbc2e8644246add51e9522f4fdf3d" alt="dropdown" />
            </div>

        </div>
        <div style={{ width: "100vw", height: "600px", position: "relative" }}>
            {
                notificationDropDown ? <Notification /> : chatDrop ? <ChatDropDown /> : userDrop ? <UserDropDown /> : null
            }
        </div>

    </>)
}

export { Navbar }