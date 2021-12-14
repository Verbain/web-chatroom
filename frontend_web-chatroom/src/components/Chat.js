import { React, useState, useRef } from 'react';
import './Chat.css'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, limit } from '@firebase/firestore';
import db from "../firebase";
import 'firebase/compat/firestore';
import axios from 'axios';

function Chat() {

    function ChatMessage(props) {
        const { text } = props.message;
        const  date  = new Date(props.message.createdAt);
        const hours = date.getHours();
        let minutes = date.getMinutes();
        if ( minutes < 10 ) {
            minutes = '0' + minutes
        }

            return (
              <div ref={ dummy } className="message">
                <p>{hours}:{minutes} | <strong>{props.message.name}</strong> : {text}</p>
              </div>
            )
    }

    const roomId = localStorage.getItem("roomId")

    const dummy = useRef()

    const messagesRef = collection(db, `/rooms/${roomId}/messages`);
    
    const q = query(messagesRef, orderBy("createdAt", "asc"), limit(25));
  
    const [messages] = useCollectionData(q, { idField: 'id' });
  
    const [formValuePseudo, setFormValuePseudo] = useState('');
    const [formValueMessage, setFormValueMessage] = useState('');

  
    const sendMessage = async(e) => {
      e.preventDefault();
        const timeStamp = new Date();
        const payload = {
            pseudo: formValuePseudo,
            message: formValueMessage,
            createdAt: timeStamp,
        }
      
      axios.post(`http://localhost:3001/api/send/message/${roomId}`, payload)
        
      setFormValuePseudo('');
      setFormValueMessage('');

      dummy.current.scrollIntoView({ behavior: 'smooth' });

    }

    return (
        <div id="chat">
            <div className="chat">
                <div>
                    { messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                </div>
            </div>
            <div className="chat-input">
                    <form onSubmit={sendMessage}>
                        <input className="input-1" value={formValuePseudo} onChange={(e) => setFormValuePseudo(e.target.value)} placeholder="Pseudo" autoComplete="off"/>
                        <div className='message-input'>
                            <input className="input-2" value={formValueMessage} onChange={(e) => setFormValueMessage(e.target.value)} placeholder="Say something..." autoComplete="off"/>
                            <button type="submit">Send</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Chat
