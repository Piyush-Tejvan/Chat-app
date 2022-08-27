import React,  { useState, useEffect, useRef } from 'react';
import {db, auth} from '../firebase';
import {ref, onValue,} from 'firebase/database';
import { onSnapshot, orderBy, query, limit, collection } from "firebase/firestore";
import SendMessage from './SendMessage';
import Logout from './Logout';


const Chat = () => {
    const scroll = useRef()
    const [messages, setMessages] = useState([]);

    const q = query(collection(db, 'chatroom'), orderBy("currtime", "asc"), limit(50));
    useEffect(() => {
        
        onSnapshot(q, (snapshot) => 
            setMessages(snapshot.docs.map((doc) => doc.data()))
    )}, []);
    
    const user = auth.currentUser;
    
    return (
        <div>
            <Logout />

            <div className="msgs">
                {messages.map(({ text, uid, time, media }, index) => (
                    <div key={index} >
                        {media ? <div className={uid === user.uid ? 'sent' : 'received'}>
                                    <div className='curtext'>
                                        <img className="media" src={media} alt='' />
                                        <p className="text">{text}</p>
                                        <p className="time">{time}</p>
                                    </div>
                                    <div className='curtime'>
                                        
                                    </div>
                                </div> 
                        :
                        <div className={uid === user.uid ? 'sent' : 'received'}>
                            <div className='curtext'>
                                <p className='text'>{text}</p>
                                <p className='time'>{time}</p>
                            </div>
                        </div>
                        }
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll}/>
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat;