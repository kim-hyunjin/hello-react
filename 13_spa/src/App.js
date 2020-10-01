import React from 'react';
import {Route} from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/about" component={About} exact={true} />
    </div>
  );
}

export default App;
