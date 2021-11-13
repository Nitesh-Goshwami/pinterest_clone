import styles from "./dropDown.module.css"


const ChatDropDown = () => {
    return (<>
        <div className = {styles.chat_dropdown}>
            <div>
            <h4 className = {styles.updates} >Inbox</h4>
            </div>
            
            <h1 className = {styles.feedLines}>Share ideas with your friends</h1>
        </div>
        </>)
}

export {ChatDropDown}