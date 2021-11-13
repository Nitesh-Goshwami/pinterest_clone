import styles from "./dropDown.module.css"


const Notification = () => {
    return (<>
    <div className = {styles.notification_dropdown}>
        <h4 className = {styles.updates} >Updates</h4>
        <div className = {styles.feedLines}>You might like these new Pins in your home feed </div>
    </div>
    </>)
}

export {Notification}