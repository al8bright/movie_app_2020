import React from 'react';

function Food() {
  return <h1>I like potato</h1>;
}

function App() {
  /*return <div className="App" />;*/
  return (
  <div>
    <h1>hello!!</h1>
    <Food fav="test"/>
  </div>
  )
}

export default App;