import React, { forwardRef } from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import "./Message.css";

const Message = forwardRef(({message, username}, ref) => {
    if (message !== undefined){
        const isUser = username === message.username;
        return (
            <div ref={ref} className={`message ${isUser && 'message__user'}`}>
                <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                    <CardContent>
                        <Typography color="white" variant="h5" componrnt="h2">
                        {!isUser && `${message.username || `Unknown User`} :`} {message.message}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }else{
        return (
            <div></div>
        )
    }
    
    
})

export default Message
