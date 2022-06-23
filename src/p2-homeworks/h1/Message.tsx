import React, {FC} from 'react';
import styles from './Message.module.css';

interface IMessage {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: FC<IMessage> = ({time, message, name, avatar}) => {
    return (
        <div className={styles.message}>
            <div className={styles.back}>
                <div>
                    <img className={styles.avatar} src={avatar} alt="Photo"/>
                </div>
                <div className={styles.messageInfo}>
                    <div>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.info}>{message}</div>
                    </div>
                    <div className={styles.time}>{time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
