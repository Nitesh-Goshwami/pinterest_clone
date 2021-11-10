import { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import { Notification } from "./Notification"


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

    const [notification,setNotification] = useState(false);
    const [abc,setAbc] = useState(true)

    const handleNotification = () => {
        setNotification(!notification)
    }

    const hadnleset = () => {
        setAbc(!abc)
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
                            activeStyle={{ fontWeight: "bold", color: "white", backgroundColor: "black", borderRadius: "24px", width: "48px", minWidth: "60px" }}>
                            {title}
                        </NavLink>)
                    })
                }
            </div>
            <div onClick = {hadnleset} style = {{display:"flex",border:"1px solid grey", height:"48px",backgroundColor:"#d0d0d0"}}>
                {abc ?<img  className = {styles.searchIcon} src = "https://cdn-user-icons.flaticon.com/57417/57417507/1636529191575.svg?token=exp=1636530099~hmac=942243f9ba732886955ddf62c1c33e5e" alt = "search" /> : null }
                
                <input className={styles.search} placeholder="Search"/>
            </div>
            <div className={styles.notificationDiv} onClick={handleNotification} >
                <img className={styles.notification}
                    src="https://cdn-user-icons.flaticon.com/57417/57417507/1636462955847.svg?token=exp=1636463878~hmac=9c13cad98ddb50437eb2346c03fb11c0" alt="Notification" />
            </div>
            <div className={styles.chatDiv}>
                <img className={styles.chat}
                    src="https://cdn-user-icons.flaticon.com/57417/57417507/1636463038789.svg?token=exp=1636463945~hmac=de7c613dd820d529a1d7d28cf4ca0004" alt="chat" />
            </div>
            <div className={styles.chatDiv}>
                <img className={styles.chat}
                    src="https://cdn-user-icons.flaticon.com/57417/57417507/1636470527918.svg?token=exp=1636471428~hmac=e37b5691fc2ce9d42f6196db6ed7cf4c" alt="chat" />
            </div>

        </div>
        {
            notification ?  <Notification/> : null
        }
    </>)
}

export { Navbar }