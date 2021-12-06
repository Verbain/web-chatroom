import { React, useState } from 'react';
import './Chat.css'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, limit, addDoc } from '@firebase/firestore';
import db from "../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Chat() {

    function ChatMessage(props) {
        const { text } = props.message;
                
            return (
              <div className="message">
                <p><strong>Pseudo</strong> : {text}</p>
              </div>
            )
    }

    const messagesRef = collection(db, `/messages`);
    
    const q = query(messagesRef, orderBy("createdAt", "asc"), limit(25));
  
    const [messages] = useCollectionData(q, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async(e) => {
      e.preventDefault();

      const payload = {
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
    
      await addDoc(messagesRef, payload)
  
      setFormValue('');
    }

    return (
        <div id="chat">
            <div className="chat">
                    { messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <div className="chat-input">
                    <form onSubmit={sendMessage}>
                        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something..." autoComplete="off"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat
