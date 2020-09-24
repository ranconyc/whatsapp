import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from './firebase'
import { Link } from 'react-router-dom'
// matirial-ui imports
import { Avatar } from '@material-ui/core';

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState(''); 

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [])

  const createChat = () => {
    const roomName = prompt('Please enter name for chat');
    if (roomName) {
      // db stuff
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar-chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `} />
        <div className="chat-info">
          <h2>{ name }</h2>
          <p>last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat}
    className="sidebar-chat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat
