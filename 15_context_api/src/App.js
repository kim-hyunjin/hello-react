import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider value={{color: 'red'}}>
      <div className="App">
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
