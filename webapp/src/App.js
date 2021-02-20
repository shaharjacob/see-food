import React from 'react';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'

const App = () => {
  return (
    <div className="my-container">
      <Navbar />
      <Main  showMenu={true} />
    </div>
  );
}

export default App;
