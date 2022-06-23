import React, {FC} from 'react';
import styles from "./Message.module.css";

interface IAlternativeMessage {
    avatar: string
    name: string
    message: string
    time: string
}

const AlternativeMessage: FC<IAlternativeMessage> = ({message, time, name, avatar}) => {
    return (
        <div className={styles.altMessage}>
            <div className={styles.back}>
                <div className={styles.altMessageInfo}>
                    <div>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.info}>{message}</div>
                    </div>
                    <div className={styles.time}>{time}</div>
                </div>
                <div>
                    <img className={styles.altAvatar} src={avatar} alt="Photo"/>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
