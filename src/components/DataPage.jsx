import React, { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const socket = useMemo(
        () =>
            io("http://localhost:3000", {
                withCredentials: true
            }),
        []
    );

    useEffect(() => {
        socket.on("chat message", msg => {
            setMessages(prevMessages => [...prevMessages, msg]);
        });

        return () => {
            socket.off("chat message");
        };
    }, [socket]);

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            socket.emit("chat message", inputValue);
            setInputValue("");
        }
    };

    return (
        <div>
            <ul id="messages">
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    id="input"
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatApp;
