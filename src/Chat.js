import React, { useEffect, useState }from 'react';
import { useParams } from 'react-router-dom'
import './Chat.css';
// matirial-ui imports
import { Avatar, IconButton } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import db from './firebase';

function Chat() {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <div className='chat'>
    <div className="chat-header">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `} />
      <div className="chat-header-info">
        <h3>{ roomName }</h3>
        <p>Last seen at..</p>
      </div>
      <div className="chat-header-rigth">
        <IconButton> 
          <SearchIcon />
        </IconButton>
        <IconButton> 
          <AttachFile />
        </IconButton>
        <IconButton> 
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
    <div className="chat-body">
      <p className={`message ${true && 'message-received'}`}>
      <span className="message-user">Ran Cohen</span>
      Hey Guys
      <span className="message-time">3:47pm</span>
      </p>
    </div>
    <div className="chat-footer">
      <InsertEmoticonIcon />
      <form>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type a message'
          type='text' />
        <button 
          onClick={sendMessage} 
          type='submit'>
            Send a message
        </button>
      </form>
      <MicIcon />
    </div>
    </div>
  )
}

export default Chat;

