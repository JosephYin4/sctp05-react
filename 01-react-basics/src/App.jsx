import React from 'react';
import './styles.css';

function App() {
  return(
  <React.Fragment>
  <h1>Hello World</h1>
  <p>Welcome to our first React App</p>
  <img src={require('./bubbletea.jpg')} alt="bubble tea" />
  <img src={require('./vite.svg')} alt="vite logo"/>
  {/* <img src={require('./vite.svg').default} alt="vite"/>
  <img src={require('./bubbletea.jpg')} alt="bubble tea"/> */}
  </React.Fragment>
  );
}

export default App;



