import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/message/message.action'

const Message = () => {
    let dispatch = useDispatch()
    let message = useSelector((state) => {
        return state.message
    })
    let gmhandler = () => {
        //dispatch an action
        dispatch(gmAction())
    }
    let gnhandler = () => {
        //dispatch an action
        dispatch(gnAction())
    }
    return (
        <div>
            <h1>Redux message</h1>
            <pre>{JSON.stringify(message)}</pre>
            <h2>message: {message.message}</h2>
            <button onClick={gmhandler}>GM</button>
            <button onClick={gnhandler}>GN</button>

        </div>
    )
}

export default Message
