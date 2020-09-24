import React, {useState} from 'react';
import Average from './Average';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => {setVisible(!visible);}}>{visible? '숨기기':'보이기'}</button>
      {visible && <Average />}
    </div>
  );
}

export default App;
