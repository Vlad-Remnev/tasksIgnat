import React from 'react';
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vlad',
    message: 'Yarn или Npm',
    time: '22:32',
}

const altMessageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Stas',
    message: 'Конечно Yarn!!',
    time: '22:34',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage
                avatar={altMessageData.avatar}
                name={altMessageData.name}
                message={altMessageData.message}
                time={altMessageData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
