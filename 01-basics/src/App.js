import React from 'react';
import logo from "./logo.svg"; // replace logo.svg with the file name of your upload image, after making sure it's in the /src folder.
import bubbletea from './bubbletea.jpg';

function App() {
return (
    <React.Fragment>
    <h1>Hello World</h1>
    <p>Welcome to our first React App</p>
    <img src={logo} alt="logo.svg"/>
    <img src={bubbletea} alt="bubbletea.jpg"/>
    </React.Fragment>
  );
}
export default App;