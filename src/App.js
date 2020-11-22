import React, { useState, useEffect } from "react";
import './App.css';
import {FormControl, InputLabel, Input} from '@material-ui/core';
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import Img from './messenger.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(sanpshot => {
      setMessages(sanpshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Enter username'));
  }, [])

  const sendMessage = event => {
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()

    })
    //setMessages([...messages, {username:username, message:input}]);
    setInput('');
  }
  return (
    <div className="App">
      <img src={Img} className="app__image" alt="pic" width="50" height="50" />
      <h3>Welcome {username}</h3>
  
      <FlipMove>
      {
        
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>

      <form className="app__form">
      <FormControl className="app__formControl"> 
        <InputLabel>Enter the message...</InputLabel>
        <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className="app__iconButton" disabled={!input} onClick={sendMessage} variant="contained" color="primary">
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>
      
      <div className="made_with">Made <FavoriteIcon color="primary" fontSize="small"/> with Shihas</div>
    </div>
  );
}

export default App;
