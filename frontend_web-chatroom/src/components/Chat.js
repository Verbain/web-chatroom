import React from 'react'
import './Chat.css'
import Message from './Message'

function Chat() {
    return (
        <div id="chat">
            <div className="chat">
                <div>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Entrez votre message...">
                    </input>
                    <button type="submit">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat
