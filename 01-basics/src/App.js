import React from 'react';
import './styles.css';
import logo from "./logo.svg"; // replace logo.svg with the file name of your upload image, after making sure it's in the /src folder.
import bubbletea from './bubbletea.jpg';

function App() {
return (
    <React.Fragment>
    <h1>Hello World</h1>
    <p style={{backgroundColor:'yellow'}}>Welcome to our first React App</p>
    <img src={logo} alt="logo.svg" width="300" height="300"/>
    <img src={bubbletea} alt="bubbletea.jpg"/>
    </React.Fragment>
  );
}
export default App;