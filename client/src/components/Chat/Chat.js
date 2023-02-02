import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from "socket.io-client";
import "./Chat.css";

const ENDPOINT = "localhost:3000";
let socket;

const Chat = ()=>{
    const location = useLocation();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    useEffect(()=>{
        const { name, room } = queryString.parse(location.search);
        
        
        socket = io(ENDPOINT, {transports: ['websocket']});
        socket.emit('join', { name, room });

        setName(name);
        setRoom(room);
        
        console.log(name, room);
        console.log(location);
        
    },[ENDPOINT, location.search]);

    return(
        <h1>Chat</h1>
    )
};

export default Chat;