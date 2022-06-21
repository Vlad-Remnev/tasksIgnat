import React from 'react'
import styles from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: MessagePropsType) {
    return (
        <div className={styles.altMessage}>
            <div className={styles.altMessageInfo}>
                <div>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.info}>{props.message}</div>
                </div>
                <div className={styles.time}>{props.time}</div>
            </div>
            <div>
                <img className={styles.altAvatar} src={props.avatar} alt="Photo"/>
            </div>
        </div>
    )
}

export default AlternativeMessage
