import React from 'react';

function sayGoodbye() {
  return "Goodbye"
  }

function displayHeader() {
    return (
    <h2>About Me</h2>
    )
  }

function ImageFrame() {
    return (
    <img src={require('./dog.jpg')} alt="Cute puppy" width="300" height="300"/>
    )
  }

function DisplayMessage(props) {
    return (
    <div>{props.whatever_message}</div>
    )
  }
function Shout(msg) {
    return (
    <div>{msg.whatever_message.toUpperCase()}</div>
    )
}

function App() {
return (
    <React.Fragment>
    <h1>Hello World</h1>
    <p>{sayGoodbye()}</p>
    {displayHeader()}
    <ImageFrame/>
    <DisplayMessage whatever_message="Hello there"/>
    <Shout whatever_message="Hello there"/>
    </React.Fragment>
  );
}
export default App;