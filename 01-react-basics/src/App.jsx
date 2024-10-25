import React from 'react';
import './styles.css';

function sayGoodbye() {
  return "Saynora"
}

function App() {
  return(
  <React.Fragment>
  <h1>Hello World</h1>
  <p style={{backgroundColor:'yellow'}}>Welcome to our first React App</p>
  {/*<img src={require('./vite.svg').default}/>}
  {<img src={require('./bubbletea.jpg').default}/>*/}
  <p>{sayGoodbye()}</p>
  </React.Fragment>
  );
  
}

export default App;



