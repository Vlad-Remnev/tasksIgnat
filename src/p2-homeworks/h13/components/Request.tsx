import React, {useState} from 'react';
import {apiRequest} from "../api";

export const Request = () => {
    const [serverStatus, setServerStatus] = useState('')
    const [checked, setChecked] = useState(false)

    const onChange = () => {
        setChecked(!checked)
    }

    const changeCheckbox = () => {
        apiRequest.postTest(checked)
            .then((res) => {
                setChecked(res.data.yourBody.success)
                setServerStatus(res.data.errorText)
            }).catch((err) => {
                setChecked(err.response.data.yourBody.success)
                setServerStatus(err.response.data.errorText)
        })
    }
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <button onClick={changeCheckbox}>Request</button>
            <div>{serverStatus}</div>
        </div>
    );
};