import React from 'react';

function Food() {
  return <h1>I like potato</h1>;
}

function App() {
  /*return <div className="App" />;*/
  return (
  <div>
    <h1>hello!!</h1>
    <Food fav="test" something={true} papapapa={['hello',1,2,3,4,true]}/>
  </div>
  )
}

export default App;