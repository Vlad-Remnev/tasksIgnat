import React from 'react';
import styles from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <div>
                <img className={styles.avatar} src={props.avatar} alt="Photo"/>
            </div>
            <div className={styles.messageInfo}>
                <div>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.info}>{props.message}</div>
                </div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
